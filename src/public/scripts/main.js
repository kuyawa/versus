let session = {
	isMobile: false,
	currentDate: new Date(),
	leagues: {},
	events: {}
}

function $(id){ return document.getElementById(id); }
function hex(num) { return '0x'+(num).toString(16); }
function checkMobile(){ session.isMobile = (document.body.clientWidth<=720); }

function getMonthName(time) {
	return (new Date(time)).toLocaleDateString([],{month: 'long'});
}

function getDayName(time) {
	return (new Date(time)).toLocaleDateString([],{weekday: 'short'}).toUpperCase();
}

function getDayNumber(time) {
	return (new Date(time)).getDate();
}

function validNumber(text='') {
    let number, value;
    //let sep = Intl.NumberFormat(navigator.language).format(1000).substr(1,1) || ',';
    let sep = ',';
    if(sep==','){ value = text.replace(/\,/g,''); }
    else if(sep=='.'){ value = text.replace(/\./g,'').replace(',','.'); }
    try { number = parseFloat(value) || 0.0; } catch(ex){ console.log(ex); number = 0.0; }
    return number;
}

function initCalendar(){
	let now = new Date();
	showCalendar(now);
}

function showCalendar(now){
	let date = now.toJSON().substr(0,10);
	let time = now.getTime();
	let day  = 24*60*60*1000;
	// Month
	$('month').innerHTML = getMonthName(time);
	// Name
	$('dayx1').innerHTML = getDayName(time - 3 * day);
	$('dayx2').innerHTML = getDayName(time - 2 * day);
	$('dayx3').innerHTML = getDayName(time - 1 * day);
	$('dayx4').innerHTML = getDayName(time);
	$('dayx5').innerHTML = getDayName(time + 1 * day);
	$('dayx6').innerHTML = getDayName(time + 2 * day);
	$('dayx7').innerHTML = getDayName(time + 3 * day);
	// Number
	$('day1').innerHTML = getDayNumber(time - 3 * day);
	$('day2').innerHTML = getDayNumber(time - 2 * day);
	$('day3').innerHTML = getDayNumber(time - 1 * day);
	$('day4').innerHTML = getDayNumber(time);
	$('day5').innerHTML = getDayNumber(time + 1 * day);
	$('day6').innerHTML = getDayNumber(time + 2 * day);
	$('day7').innerHTML = getDayNumber(time + 3 * day);
	session.currentDate = date;
	loadEvents()
}

async function loadEvents(){
	let data, info;
	let date = session.currentDate.replace(/-/g,'');
	let url  = '/data/all/date'+date+'.json';
	console.log('Url', url);
	try {
		data = await fetch(url, {method:'get'});
		info = await data.json();
	} catch(ex) { 
		console.log('Error', ex);
	}
	console.log('Info', info);
	session.events = info;
	showEvents(info);
}

function showEvents(info){
	console.log('Info', info);
	let html = '';
	let rows = '';
	let row  = '';
	//var tmpTable = $('ui-list-events').innerHTML;
	var tmpTable = '<table class="list" id="list-{symbol}"><caption>{name}</caption><tbody>{rows}</tbody></table>';
	let tmpRow   = $('ui-row-event').innerHTML;
	let tmpEmpty = $('ui-row-noevents').innerHTML;

	if(info){ 
		for (league in info) {
			console.log('League', league);
			let evts  = info[league];
			let table = tmpTable.replace('{symbol}', league.toLowerCase()).replace('{name}', leagues[league].short);
			rows = '';
			//for (var i = 0; i < info[league].length; i++) {
			for (key in evts) {
				let evt     = evts[key];
				let address = key;
				let sym0    = evt[0];
				let sym1    = evt[1];
				let time    = evt[2];
				let status  = config.status[evt[3]];
				let team0   = leagues[league].teams[sym0];
				let team1   = leagues[league].teams[sym1];
				let home    = (config.home[league]==1 ? team1 : team0);
				let venue   = leagues[league].venues[home.venue];
				let odds0   = 200;
				let odds1   = 200;
				let draw    = 200;
				let hide    = (config.draw[league]==0 ? 'hide' : '');
				console.log('-', league, address, sym0, sym1, team0, team1, venue);
				row = tmpRow.replace(/{address}/g, address)
							.replace('{venue}', venue.short)
							.replace(/{league}/g, league.toLowerCase())
							.replace('{sym0}', sym0.toLowerCase())
							.replace('{team0}', team0.short)
							.replace('{odds0}', odds0)
							.replace('{status-class}', status.toLowerCase())
							.replace('{status-text}', status)
							.replace('{hide}', hide)
							.replace('{draw}', draw)
							.replace('{time}', time)
							.replace('{sym1}', sym1.toLowerCase())
							.replace('{team1}', team1.short)
							.replace('{odds1}', odds1)
				rows += row;
			}
			table = table.replace('{rows}', rows);
			html += table;
		}
	} else {
		console.log('NO INFO'); 
		html = tmpTable.replace('{symbol}', 'none').replace('{name}', 'Events').replace('{rows}', tmpEmpty);
	}

	$('all-lists').innerHTML = html;
	updateOdds(info);
}

async function updateOdds(info){
	for (league in session.events) {
		console.log(league);
		for (address in session.events[league]) {
			console.log(address);
			let info = await getEventInfo(address);
			console.log(info);
			if(info){
				// Update odds
				let row    = $(address);
			    let status = config.status[parseInt(info.status||'0')] || 'Open?';
    			let total  = parseInt(info.total||'0') / 10**18;
			    let hstat  = row.getElementsByClassName('status')[0];
    			hstat.innerHTML = status;

				// Option 0
				let opt0   = info.options[0];
			    let votes0 = parseInt(opt0.total||'0') / 10**18;
        		let odds0  = (votes0>0 ? parseInt(total*100/votes0) : 200);
			    let hodds0 = row.getElementsByClassName('odds0')[0];
			    hodds0.innerHTML = odds0;

				// Option 1
				let opt1   = info.options[1];
			    let votes1 = parseInt(opt1.total||'0') / 10**18;
        		let odds1  = (votes1>0 ? parseInt(total*100/votes1) : 200);
			    let hodds1 = row.getElementsByClassName('odds1')[0];
			    hodds1.innerHTML = odds1;

				// Option X
				//let optX   = info.options[2];
			    //let votesX = parseInt(opt0.total||'0') / 10**18;
        		//let oddsX  = (votesX>0 ? parseInt(total*100/votesX) : 200);
			    //let hoddsX = row.getElementsByClassName('oddsX')[0];
			    //hoddsX.innerHTML = oddsX;

			}
		}
	}
}

function onBet(address, opt){
	console.log('ON BET', address, opt);
	let found  = false;
	let league = null;
	for(key in session.events){
		for(adr in session.events[key]){
			if(adr==address){ found = true; league = key; break; }
		}
		if(found){ break; }
	}
	if(!league){ console.log('No league?'); return; }
	if(opt==1 && config.draw[league]==0){ return; }
	console.log('League', league, 'Event', address, 'Option', opt);
	showForm(league, address, opt);
}

async function showForm(league, address, opt){
	$('modal').style.display = 'block';
	$('address').value = address;
	let info = await getEventInfo(address);
	if(info){
		// Odds
    	let total  = parseInt(info.total||'0') / 10**18;

		// Option 0
		let opt0   = info.options[0];
		let title0 = info.options[0].title;
	    let votes0 = parseInt(opt0.total||'0') / 10**18;
		let odds0  = (votes0>0 ? parseInt(total*100/votes0) : 200);
		let oddsX  = 200;
		let odds1  = 200;
		let title  = '?';
		let title1 = '?';
		let titleX = '?';
		let sel0   = 0;

		if(info.options.length==2){ 
			console.log('2 OPTs');
			// Option 1
			let opt1   = info.options[1];
		    let votes1 = parseInt(opt1.total||'0') / 10**18;
			odds1  = (votes1>0 ? parseInt(total*100/votes1) : 200);
			title1 = info.options[1].title;
			sel1 = 1;
		} else {
			console.log('3 OPTs');
			// Option X Draw
			let optX   = info.options[1];
		    let votesX = parseInt(optX.total||'0') / 10**18;
			oddsX  = (votesX>0 ? parseInt(total*100/votesX) : 200);
			titleX = info.options[1].title;
			selX   = 1;
			// Option 1
			let opt1   = info.options[2];
		    let votes1 = parseInt(opt1.total||'0') / 10**18;
			odds1  = (votes1>0 ? parseInt(total*100/votes1) : 200);
			title1 = info.options[2].title;
			sel1   = 2;
		}

		let odds = 200;
		switch(opt){
			case 0: title = title0; odds = odds0; option = sel0; break;
			case 1: title = titleX; odds = oddsX; option = selX; break;
			case 2: title = title1; odds = odds1; option = sel1; break;
			default: odds = 200;
		}
		$('form-team').innerHTML = title;
		$('option').value   = option;
		$('odds').innerHTML = odds;
		$('form-ubet').innerHTML = 'You bet 100 - You win ' + odds;
	}
}

function hideForm(){
	$('modal').style.display = 'none';
}

function ignoreClick(){
	console.log('Ignore')
	window.event.stopPropagation();
	window.event.preventDefault();
}

async function placeBet(){
	console.log('Betting...');
	let amount  = validNumber($('amount').value);
	let address = $('address').value;
	let option  = $('option').value;
	if(amount<=0){ 
		showMessage('Amount must be greater than zero');
		return;
	}
	showMessage('Wait, placing bet');
	//let accept = function(msg) { showMessage('BET SENT!<br><a target="_blank" href="https://testnet.bscscan.com/tx/'+msg+'">'+msg.substr(0,10)+'</a>'); return false;}
	let accept = function(msg) { showMessage('BET SENT!'); return false;}
    let reject = function(msg, tx) { showMessage(msg); return false; }
	sendBet(address, option, amount, accept, reject);
	//let ok = await sendBet(address, option, amount);
	//if(ok.error) { showMessage(ok.error); return; }
	//showMessage('BET SENT!');
}

function showMessage(text) {
	$('message').innerHTML = text;
}


//---- EVENTS

function onDay(num) {
	let time = new Date(session.currentDate).getTime();
	let day  = 24*60*60*1000; 
	switch(num){ 
		case 1: dd = time - 3 * day; break;
		case 2: dd = time - 2 * day; break;
		case 3: dd = time - 1 * day; break;
		case 4: dd = new Date().getTime(); break;
		case 5: dd = time + 1 * day; break;
		case 6: dd = time + 2 * day; break;
		case 7: dd = time + 3 * day; break;
	}
	let date = new Date(dd);
	showCalendar(date);
}


//---- MAIN

function init() {
	setTimeout(main, 3000);
}

async function main(){
	console.log('Versus is running...');
	checkMobile();
	await initWallet();
	await initCalendar();
}

window.onload = init;

// END