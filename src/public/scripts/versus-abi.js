let VersusABI = {
	"data": {
		"gasEstimates": {
			"creation": {
				"codeDepositCost": "4143400",
				"executionCost": "infinite",
				"totalCost": "infinite"
			},
			"external": {
				"_decimals()": "1147",
				"_name()": "infinite",
				"_symbol()": "infinite",
				"allowance(address,address)": "1294",
				"approve(address,uint256)": "infinite",
				"awardEvent()": "86637",
				"balanceOf(address)": "1231",
				"cancelEvent()": "86680",
				"cashOut()": "infinite",
				"closeEvent()": "86595",
				"collectFees()": "infinite",
				"countWinners()": "6127",
				"decimals()": "1125",
				"decreaseAllowance(address,uint256)": "infinite",
				"finalize()": "86644",
				"getAddressVotes(uint8,address)": "3825",
				"getCollector()": "2845",
				"getController()": "1961",
				"getEventFee()": "1878",
				"getInfo()": "infinite",
				"getOptionOdds(uint8)": "infinite",
				"getOptionRate(uint8)": "infinite",
				"getOptionTickets(uint8)": "3698",
				"getOptionVotes(uint8)": "3702",
				"getOwner()": "1140",
				"getTotalTickets()": "1902",
				"getTotalVotes()": "1877",
				"increaseAllowance(address,uint256)": "infinite",
				"initEvent(uint8,string,string,string,uint256,uint256,uint256)": "infinite",
				"mint(uint256)": "infinite",
				"name()": "infinite",
				"newOption(string,string,string)": "infinite",
				"openEvent()": "86724",
				"owner()": "1127",
				"refund()": "infinite",
				"renounceOwnership()": "24315",
				"setCollector(address)": "66206",
				"setController(address)": "66208",
				"setEventFee(uint256)": "69695",
				"setOption(uint8,string,string,string)": "infinite",
				"setWinner(uint8)": "67880",
				"symbol()": "infinite",
				"totalSupply()": "1133",
				"transfer(address,uint256)": "infinite",
				"transferFrom(address,address,uint256)": "infinite",
				"transferOwnership(address)": "infinite",
				"vote(uint8)": "infinite"
			},
			"internal": {
				"cat2(string memory,string memory)": "infinite",
				"cat3(string memory,string memory,string memory)": "infinite",
				"cat4(string memory,string memory,string memory,string memory)": "infinite",
				"forceClose()": "infinite",
				"getOptionInfo(uint8)": "infinite",
				"getOptions()": "infinite",
				"str(uint256)": "infinite"
			}
		},
		"methodIdentifiers": {
			"_decimals()": "32424aa3",
			"_name()": "d28d8852",
			"_symbol()": "b09f1266",
			"allowance(address,address)": "dd62ed3e",
			"approve(address,uint256)": "095ea7b3",
			"awardEvent()": "c04ee491",
			"balanceOf(address)": "70a08231",
			"cancelEvent()": "fb6c9537",
			"cashOut()": "793cd71e",
			"closeEvent()": "03dc5326",
			"collectFees()": "c8796572",
			"countWinners()": "a565efff",
			"decimals()": "313ce567",
			"decreaseAllowance(address,uint256)": "a457c2d7",
			"finalize()": "4bb278f3",
			"getAddressVotes(uint8,address)": "ee524db7",
			"getCollector()": "50228201",
			"getController()": "3018205f",
			"getEventFee()": "84451953",
			"getInfo()": "5a9b0b89",
			"getOptionOdds(uint8)": "34ed59de",
			"getOptionRate(uint8)": "d513dcc0",
			"getOptionTickets(uint8)": "6c8ac8e1",
			"getOptionVotes(uint8)": "283d4c7b",
			"getOwner()": "893d20e8",
			"getTotalTickets()": "06e8337f",
			"getTotalVotes()": "9a0e7d66",
			"increaseAllowance(address,uint256)": "39509351",
			"initEvent(uint8,string,string,string,uint256,uint256,uint256)": "963fbedb",
			"mint(uint256)": "a0712d68",
			"name()": "06fdde03",
			"newOption(string,string,string)": "81ab98e2",
			"openEvent()": "aee684a5",
			"owner()": "8da5cb5b",
			"refund()": "590e1ae3",
			"renounceOwnership()": "715018a6",
			"setCollector(address)": "fb5b82d0",
			"setController(address)": "92eefe9b",
			"setEventFee(uint256)": "457488fb",
			"setOption(uint8,string,string,string)": "4cc02480",
			"setWinner(uint8)": "fda31178",
			"symbol()": "95d89b41",
			"totalSupply()": "18160ddd",
			"transfer(address,uint256)": "a9059cbb",
			"transferFrom(address,address,uint256)": "23b872dd",
			"transferOwnership(address)": "f2fde38b",
			"vote(uint8)": "b3f98adc"
		}
	},
	"abi": [
		{
			"inputs": [
				{
					"internalType": "string",
					"name": "name",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "symbol",
					"type": "string"
				},
				{
					"internalType": "uint8",
					"name": "decimals",
					"type": "uint8"
				},
				{
					"internalType": "uint256",
					"name": "amount",
					"type": "uint256"
				}
			],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "constructor"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": true,
					"internalType": "address",
					"name": "owner",
					"type": "address"
				},
				{
					"indexed": true,
					"internalType": "address",
					"name": "spender",
					"type": "address"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "value",
					"type": "uint256"
				}
			],
			"name": "Approval",
			"type": "event"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": true,
					"internalType": "address",
					"name": "caller",
					"type": "address"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "stamp",
					"type": "uint256"
				}
			],
			"name": "LOG_AWARD",
			"type": "event"
		},
		{
			"anonymous": true,
			"inputs": [
				{
					"indexed": true,
					"internalType": "bytes4",
					"name": "sig",
					"type": "bytes4"
				},
				{
					"indexed": true,
					"internalType": "address",
					"name": "caller",
					"type": "address"
				},
				{
					"indexed": false,
					"internalType": "bytes",
					"name": "data",
					"type": "bytes"
				}
			],
			"name": "LOG_CALL",
			"type": "event"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": true,
					"internalType": "address",
					"name": "caller",
					"type": "address"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "stamp",
					"type": "uint256"
				}
			],
			"name": "LOG_CANCEL",
			"type": "event"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": true,
					"internalType": "address",
					"name": "caller",
					"type": "address"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "bet",
					"type": "uint256"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "odd",
					"type": "uint256"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "amt",
					"type": "uint256"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "fee",
					"type": "uint256"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "stamp",
					"type": "uint256"
				}
			],
			"name": "LOG_CASHOUT",
			"type": "event"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": true,
					"internalType": "address",
					"name": "caller",
					"type": "address"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "stamp",
					"type": "uint256"
				}
			],
			"name": "LOG_CLOSE",
			"type": "event"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": true,
					"internalType": "address",
					"name": "caller",
					"type": "address"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "votes",
					"type": "uint256"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "fees",
					"type": "uint256"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "stamp",
					"type": "uint256"
				}
			],
			"name": "LOG_COLLECT",
			"type": "event"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": true,
					"internalType": "address",
					"name": "caller",
					"type": "address"
				},
				{
					"indexed": false,
					"internalType": "address",
					"name": "collector",
					"type": "address"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "stamp",
					"type": "uint256"
				}
			],
			"name": "LOG_COLLECTOR",
			"type": "event"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": true,
					"internalType": "address",
					"name": "caller",
					"type": "address"
				},
				{
					"indexed": false,
					"internalType": "address",
					"name": "controller",
					"type": "address"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "stamp",
					"type": "uint256"
				}
			],
			"name": "LOG_CONTROLLER",
			"type": "event"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": true,
					"internalType": "address",
					"name": "caller",
					"type": "address"
				},
				{
					"indexed": false,
					"internalType": "address",
					"name": "self",
					"type": "address"
				},
				{
					"indexed": false,
					"internalType": "string",
					"name": "symbol",
					"type": "string"
				},
				{
					"indexed": false,
					"internalType": "string",
					"name": "name",
					"type": "string"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "stamp",
					"type": "uint256"
				}
			],
			"name": "LOG_EVENT",
			"type": "event"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": true,
					"internalType": "address",
					"name": "caller",
					"type": "address"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "stamp",
					"type": "uint256"
				}
			],
			"name": "LOG_FINAL",
			"type": "event"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": true,
					"internalType": "address",
					"name": "caller",
					"type": "address"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "stamp",
					"type": "uint256"
				}
			],
			"name": "LOG_FORCE",
			"type": "event"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": true,
					"internalType": "address",
					"name": "caller",
					"type": "address"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "stamp",
					"type": "uint256"
				}
			],
			"name": "LOG_OPEN",
			"type": "event"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": true,
					"internalType": "address",
					"name": "caller",
					"type": "address"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "bet",
					"type": "uint256"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "amt",
					"type": "uint256"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "stamp",
					"type": "uint256"
				}
			],
			"name": "LOG_REFUND",
			"type": "event"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": true,
					"internalType": "address",
					"name": "caller",
					"type": "address"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "oldfee",
					"type": "uint256"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "newfee",
					"type": "uint256"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "stamp",
					"type": "uint256"
				}
			],
			"name": "LOG_SETFEE",
			"type": "event"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": true,
					"internalType": "address",
					"name": "caller",
					"type": "address"
				},
				{
					"indexed": false,
					"internalType": "uint8",
					"name": "option",
					"type": "uint8"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "amount",
					"type": "uint256"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "stamp",
					"type": "uint256"
				}
			],
			"name": "LOG_VOTE",
			"type": "event"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": true,
					"internalType": "address",
					"name": "caller",
					"type": "address"
				},
				{
					"indexed": false,
					"internalType": "uint8",
					"name": "winner",
					"type": "uint8"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "stamp",
					"type": "uint256"
				}
			],
			"name": "LOG_WINNER",
			"type": "event"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": true,
					"internalType": "address",
					"name": "previousOwner",
					"type": "address"
				},
				{
					"indexed": true,
					"internalType": "address",
					"name": "newOwner",
					"type": "address"
				}
			],
			"name": "OwnershipTransferred",
			"type": "event"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": true,
					"internalType": "address",
					"name": "from",
					"type": "address"
				},
				{
					"indexed": true,
					"internalType": "address",
					"name": "to",
					"type": "address"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "value",
					"type": "uint256"
				}
			],
			"name": "Transfer",
			"type": "event"
		},
		{
			"constant": true,
			"inputs": [],
			"name": "_decimals",
			"outputs": [
				{
					"internalType": "uint8",
					"name": "",
					"type": "uint8"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [],
			"name": "_name",
			"outputs": [
				{
					"internalType": "string",
					"name": "",
					"type": "string"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [],
			"name": "_symbol",
			"outputs": [
				{
					"internalType": "string",
					"name": "",
					"type": "string"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [
				{
					"internalType": "address",
					"name": "owner",
					"type": "address"
				},
				{
					"internalType": "address",
					"name": "spender",
					"type": "address"
				}
			],
			"name": "allowance",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": false,
			"inputs": [
				{
					"internalType": "address",
					"name": "spender",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "amount",
					"type": "uint256"
				}
			],
			"name": "approve",
			"outputs": [
				{
					"internalType": "bool",
					"name": "",
					"type": "bool"
				}
			],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"constant": false,
			"inputs": [],
			"name": "awardEvent",
			"outputs": [],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [
				{
					"internalType": "address",
					"name": "account",
					"type": "address"
				}
			],
			"name": "balanceOf",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": false,
			"inputs": [],
			"name": "cancelEvent",
			"outputs": [],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"constant": false,
			"inputs": [],
			"name": "cashOut",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"constant": false,
			"inputs": [],
			"name": "closeEvent",
			"outputs": [],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"constant": false,
			"inputs": [],
			"name": "collectFees",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [],
			"name": "countWinners",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [],
			"name": "decimals",
			"outputs": [
				{
					"internalType": "uint8",
					"name": "",
					"type": "uint8"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": false,
			"inputs": [
				{
					"internalType": "address",
					"name": "spender",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "subtractedValue",
					"type": "uint256"
				}
			],
			"name": "decreaseAllowance",
			"outputs": [
				{
					"internalType": "bool",
					"name": "",
					"type": "bool"
				}
			],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"constant": false,
			"inputs": [],
			"name": "finalize",
			"outputs": [],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [
				{
					"internalType": "uint8",
					"name": "index",
					"type": "uint8"
				},
				{
					"internalType": "address",
					"name": "any",
					"type": "address"
				}
			],
			"name": "getAddressVotes",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [],
			"name": "getCollector",
			"outputs": [
				{
					"internalType": "address",
					"name": "",
					"type": "address"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [],
			"name": "getController",
			"outputs": [
				{
					"internalType": "address",
					"name": "",
					"type": "address"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [],
			"name": "getEventFee",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [],
			"name": "getInfo",
			"outputs": [
				{
					"internalType": "string",
					"name": "",
					"type": "string"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [
				{
					"internalType": "uint8",
					"name": "index",
					"type": "uint8"
				}
			],
			"name": "getOptionOdds",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [
				{
					"internalType": "uint8",
					"name": "index",
					"type": "uint8"
				}
			],
			"name": "getOptionRate",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [
				{
					"internalType": "uint8",
					"name": "index",
					"type": "uint8"
				}
			],
			"name": "getOptionTickets",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [
				{
					"internalType": "uint8",
					"name": "index",
					"type": "uint8"
				}
			],
			"name": "getOptionVotes",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [],
			"name": "getOwner",
			"outputs": [
				{
					"internalType": "address",
					"name": "",
					"type": "address"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [],
			"name": "getTotalTickets",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [],
			"name": "getTotalVotes",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": false,
			"inputs": [
				{
					"internalType": "address",
					"name": "spender",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "addedValue",
					"type": "uint256"
				}
			],
			"name": "increaseAllowance",
			"outputs": [
				{
					"internalType": "bool",
					"name": "",
					"type": "bool"
				}
			],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"constant": false,
			"inputs": [
				{
					"internalType": "uint8",
					"name": "categ",
					"type": "uint8"
				},
				{
					"internalType": "string",
					"name": "title",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "notes",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "venue",
					"type": "string"
				},
				{
					"internalType": "uint256",
					"name": "tini",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "tend",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "twin",
					"type": "uint256"
				}
			],
			"name": "initEvent",
			"outputs": [],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"constant": false,
			"inputs": [
				{
					"internalType": "uint256",
					"name": "amount",
					"type": "uint256"
				}
			],
			"name": "mint",
			"outputs": [
				{
					"internalType": "bool",
					"name": "",
					"type": "bool"
				}
			],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [],
			"name": "name",
			"outputs": [
				{
					"internalType": "string",
					"name": "",
					"type": "string"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": false,
			"inputs": [
				{
					"internalType": "string",
					"name": "code",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "title",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "short",
					"type": "string"
				}
			],
			"name": "newOption",
			"outputs": [],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"constant": false,
			"inputs": [],
			"name": "openEvent",
			"outputs": [],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [],
			"name": "owner",
			"outputs": [
				{
					"internalType": "address",
					"name": "",
					"type": "address"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": false,
			"inputs": [],
			"name": "refund",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"constant": false,
			"inputs": [],
			"name": "renounceOwnership",
			"outputs": [],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"constant": false,
			"inputs": [
				{
					"internalType": "address payable",
					"name": "any",
					"type": "address"
				}
			],
			"name": "setCollector",
			"outputs": [],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"constant": false,
			"inputs": [
				{
					"internalType": "address",
					"name": "any",
					"type": "address"
				}
			],
			"name": "setController",
			"outputs": [],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"constant": false,
			"inputs": [
				{
					"internalType": "uint256",
					"name": "newfee",
					"type": "uint256"
				}
			],
			"name": "setEventFee",
			"outputs": [],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"constant": false,
			"inputs": [
				{
					"internalType": "uint8",
					"name": "index",
					"type": "uint8"
				},
				{
					"internalType": "string",
					"name": "code",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "title",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "short",
					"type": "string"
				}
			],
			"name": "setOption",
			"outputs": [],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"constant": false,
			"inputs": [
				{
					"internalType": "uint8",
					"name": "index",
					"type": "uint8"
				}
			],
			"name": "setWinner",
			"outputs": [],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [],
			"name": "symbol",
			"outputs": [
				{
					"internalType": "string",
					"name": "",
					"type": "string"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [],
			"name": "totalSupply",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": false,
			"inputs": [
				{
					"internalType": "address",
					"name": "recipient",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "amount",
					"type": "uint256"
				}
			],
			"name": "transfer",
			"outputs": [
				{
					"internalType": "bool",
					"name": "",
					"type": "bool"
				}
			],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"constant": false,
			"inputs": [
				{
					"internalType": "address",
					"name": "sender",
					"type": "address"
				},
				{
					"internalType": "address",
					"name": "recipient",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "amount",
					"type": "uint256"
				}
			],
			"name": "transferFrom",
			"outputs": [
				{
					"internalType": "bool",
					"name": "",
					"type": "bool"
				}
			],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"constant": false,
			"inputs": [
				{
					"internalType": "address",
					"name": "newOwner",
					"type": "address"
				}
			],
			"name": "transferOwnership",
			"outputs": [],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"constant": false,
			"inputs": [
				{
					"internalType": "uint8",
					"name": "index",
					"type": "uint8"
				}
			],
			"name": "vote",
			"outputs": [],
			"payable": true,
			"stateMutability": "payable",
			"type": "function"
		}
	]
}