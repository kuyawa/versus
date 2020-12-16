let MAINURL = 'https://bsc-dataseed.binance.org'; // MAINNET
let TESTURL = 'https://data-seed-prebsc-1-s1.binance.org:8545'; // TESTNET
//let TESTURL = 'https://testnet-dex.binance.org/'; // TESTNET?

let Binance = {
	neturl    : TESTURL,
	network   : 'bsc-testnet',
	chainId   : 97,
	accounts  : null,
	myaccount : null
}

var bsc;
var web3;

async function initWallet() {
    console.log('Wallet starting...')
    if (window.BinanceChain) {
    	console.log('window.binance')
	 	bsc = window.BinanceChain;
		//$('flipper').checked = (bsc.chainId == 56);
	 	setListeners();
	 	//setNetwork();
	 	loadWallet();
    } else {
    	console.log('BinanceChain not available')
    }
}

function setListeners() {
	bsc.on('connect', onConnect);
	bsc.on('disconnect', onDisconnect);
	bsc.on('accountsChanged', onAccounts);
	bsc.on('chainChanged', onChain);
	bsc.on('message', onMessage);
	console.log('Listeners set');
}

async function setNetwork(chainId) {
	if(!chainId){ chainId = bsc.chainId; }
	Binance.mainnet = (chainId == 56);
	Binance.network = Binance.mainnet ? 'bsc-mainnet' : 'bsc-testnet';
	Binance.neturl  = Binance.mainnet ? MAINURL : TESTURL;
	Binance.chainId = chainId;
	console.log('Network', Binance.network, Binance.chainId);
}

async function loadWallet() {
	console.log('Loading wallet...', Binance.network);
	web3 = new Web3(Binance.neturl);
	//web3.eth.getChainId().then(id => { console.log('ChainId', id) })
	//console.log('WEB3', web3);
	console.log('VER', web3.version)

    if (window.BinanceChain) {
    	//console.log('window.binance')
	 	//bsc = window.BinanceChain;
	 	if(bsc.isConnected()) { 
	 		console.log('Already connected to', bsc.chainId==0x38?'MAINNET':'TESTNET', bsc.chainId); 
			getAccounts();
			getAddress(getBalance);
	 	} else {
	 		console.log('Conecting...')
			bsc.enable().then((err, accts) => { 
				console.log('Enabled', err, accts)
				getAccounts();
				getAddress().then(adr=>{
					console.log('Passed1')
					getBalance(adr);
				});
			});
		}
    } else {
    	console.log('BinanceChain not available')
    }
}

// BinanceChain Events
async function onConnect(info) {
	console.log('onConnect', info);
	// info.chainId
	setNetwork(info.chainId);
	loadWallet();
}

async function onDisconnect(info) {
	console.log('onDisconnect', info)
	//
	console.log('Disconnected')
}

async function onAccounts(info) {
	console.log('onAccounts', info)
}

async function onChain(chainId) {
	console.log('onChain', chainId)
	if(chainId==Binance.chainId) { console.log('Already on chain', chainId); return; }
	setNetwork(chainId);
	loadWallet();
	//requestAccount();
	//getAccounts();
}

async function onMessage(info) {
	console.log('onMessage', info)
}

/*
function requestAccount() {
    bsc.request({ method: 'eth_requestAccounts' }).then(onAccounts)
    .catch(err => {
      if (err.code === 4001) {
        console.log('User rejected');
        console.log('Please connect to Binance Wallet');
      } else {
        console.error('Connection error', err);
      }
    });
}
*/

// Methods
async function getAccounts() {
	bsc.requestAccounts().then(accts => {
		Binance.accounts = accts;
		console.log('Accounts', accts)
	}).catch(err => { 
		console.log('Error: User rejected'); 
		console.error(err) 
		$('wallet').innerHTML = 'User rejected connection'; 
	});
}

async function getAddress(oncall) {
	console.log('Get accounts...');
	bsc.request({method: 'eth_requestAccounts'}).then(res=>{
		console.log('Account', res);
		Binance.myaccount = res[0];
		$('user-address').innerHTML = Binance.myaccount.substr(0,10); 
		oncall(Binance.myaccount)
	}).catch(err => { 
		console.log('Error: Wallet not connected'); 
		console.error(err) 
		$('user-address').innerHTML = 'Not connected'; 
		$('user-balance').innerHTML = '0.0000 BNB'; 
		oncall(null);
	});
}

async function getBalance(adr) {
	console.log('Get balance...');
	web3.eth.getBalance(adr, (err,res) => {
		console.log('Balance', adr.substr(0,8), res);
		let bal = (parseInt(res)/10**18).toLocaleString('en-US', { useGrouping: true, minimumFractionDigits: 4, maximumFractionDigits: 4});
    	$('user-balance').innerHTML = bal+' BNB';
	});
}

async function attachWallet(wallet, address, reject){
    console.log('Attach', wallet, address);
    if (!address) { address = Binance.myaccount; }
    console.log('-Address:', address);
    wallet.defaultSigner = address;
    wallet.signTransaction = async function(tx, ad, rj, x) {
    	//return new Promise(async (resolve, reject) => {
    	//	try { }

    	console.log('--Address:', address);
        //console.log('TX', tx);
        console.log('Artifacts', tx, ad, rj, x);
        try {
            tx.from = address;
            let res = await bsc.bnbSign(tx, reject);
            //let res = await bsc.bnbSign(tx, ad, rj, x);
            console.log('Tx signed:', res);
            return res;
        } catch (ex) {
            console.log('Error signing tx:', ex);
            if(reject) { reject(tx, ex); }
        }
        return tx;
    }
}

async function getGasPrice() {
    let gas = await web3.eth.getGasPrice();
    console.log('Average gas price:', gas);
    return gas;
}

async function doSomething(address){
	console.log('Something at', address)
	let ctx = VersusABI;
    let web3 = new Web3(window.web3.currentProvider);
    let ctr = new web.eth.Contract(ctx.abi, address);
    console.log(ctr.methods);
}

async function callContract(address) {
	console.log('Call', address)
	let abi = VersusABI.abi;
    let web = new Web3(window.web3.currentProvider);
	let ctr = new web.eth.Contract(abi, address);
    let gas = { gasPrice: 1000000000, gasLimit: 275000 };
	let res = ctr.methods.getCollector().call(gas);
	console.log(res);
}

async function getEventInfo(address) {
	console.log('EventInfo for', address)
	let abi = VersusABI.abi;
    let web = new Web3(window.web3.currentProvider);
	let ctr = new web.eth.Contract(abi, address);
    let gas = { gasPrice: hex(10000000000000), gas: hex(275000) };
    //let gas = { gasPrice: '0x9184e72a000', gas: '0x43238' };
    let res = null;
    let inf = null;
    try{
		console.log('GAS',gas);
		res = await ctr.methods.getInfo().call(gas);
        inf = JSON.parse(res);
		//console.log('RES',res);
    } catch(ex) {
    	console.log('Contract Error', ex)
    }
    return inf;
}

async function sendBet(adr, opt, amt, accept, reject) {
	console.log('BET', adr, opt, amt);
	let abi = VersusABI.abi;
    let web = new Web3(window.web3.currentProvider);
	let ctr = new web.eth.Contract(abi, adr);
	//console.log('CTR', ctr);
    //let att = await attachWallet(ctr.wallet, null, reject);
	let wei = amt * 10**18;
    let dat = { from:Binance.myaccount, value: wei, gasPrice: hex(10000000000000), gasLimit: hex(275000) };
    let res, inf;
    try{
		//console.log('DATA', dat);
	    //res = await ctr.methods.vote(opt).send(dat);
        //inf = JSON.parse(res);
		//console.log('RES',res);
		let value = '000000000000000000000000000000000000000000000000000000000000000'+opt;
		let params = [
	  		{
			    from: Binance.myaccount,
			    to: adr,
			    gas: hex(100000),
			    gasPrice: hex(100000000000),
			    value: hex(wei),
			    data: '0xb3f98adc'+value
			}
		];
		console.log('DATA', params);
		BinanceChain.request({ method: 'eth_sendTransaction', params }).then((result) => {
	    	console.log('Result', result);
    		//inf = { tx: result };
	    	accept(result);
	    	return;
		}).catch((error) => {
	    	console.log('Error', error);
    		//inf = { error: error.error };
    		reject(error.error);
    		return;
	  	});

    } catch(ex) {
    	console.log('BET Error', ex)
    }
    return inf;
}


async function switchNetwork(chainName) {
	//chainId = $('flipper').checked ? 56 : 97;
	//chainName = $('flipper').checked ? 'bsc-mainnet' : 'bsc-testnet';
	window.BinanceChain.switchNetwork(chainName).then(info=>{
		console.log('Switch', info);
		//chainId = info.networkId == 'bsc-mainnet' ? 56 : 97;
		//setNetwork(chainId);
		//loadWallet();
	}).catch(err=>{ 
		//console.log(err);
		console.log(err.error); 
	});
}

// END