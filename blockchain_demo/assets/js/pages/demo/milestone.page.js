
parasails.registerPage('milestone', {
  //  ╦╔╗╔╦╔╦╗╦╔═╗╦    ╔═╗╔╦╗╔═╗╔╦╗╔═╗
  //  ║║║║║ ║ ║╠═╣║    ╚═╗ ║ ╠═╣ ║ ║╣
  //  ╩╝╚╝╩ ╩ ╩╩ ╩╩═╝  ╚═╝ ╩ ╩ ╩ ╩ ╚═╝
  data: {
    deployModalVisible: false,
    fundModalVisible: false,
    payoutModalVisible: false,
    cancelModalVisible: false,
    ethAccount: "0x5aB5E52245Fd4974499aa625709EE1F5A81c8157",
    injectedBalance: "",
    status: "",
    etherscan: "",
    yourAccount: "",
    payAccount: "0x5aB5E52245Fd4974499aa625709EE1F5A81c8157",
    contractAddress: "",
    etherscanContract: "",
    contractABI: [
		{
			"constant": true,
			"inputs": [],
			"name": "recipient",
			"outputs": [
				{
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
			"name": "owner",
			"outputs": [
				{
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
			"inputs": [
				{
					"name": "amount",
					"type": "uint256"
				}
			],
			"name": "payout",
			"outputs": [],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"constant": false,
			"inputs": [],
			"name": "cancel",
			"outputs": [],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"name": "payee",
					"type": "address"
				}
			],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "constructor"
		},
		{
			"payable": true,
			"stateMutability": "payable",
			"type": "fallback"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": false,
					"name": "from",
					"type": "address"
				},
				{
					"indexed": false,
					"name": "to",
					"type": "address"
				},
				{
					"indexed": false,
					"name": "amount",
					"type": "uint256"
				}
			],
			"name": "Sent",
			"type": "event"
		}
	],
	contractByteCode: {
		"linkReferences": {},
		"object": "608060405234801561001057600080fd5b50604051602080610237833981016040525160008054600160a060020a0319908116331790915560018054600160a060020a03909316929091169190911790556101d88061005f6000396000f3006080604052600436106100615763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166366d003ac81146100635780638da5cb5b14610094578063e1152343146100a9578063ea8a1af0146100c1575b005b34801561006f57600080fd5b506100786100d6565b60408051600160a060020a039092168252519081900360200190f35b3480156100a057600080fd5b506100786100e5565b3480156100b557600080fd5b506100616004356100f4565b3480156100cd57600080fd5b5061006161015c565b600154600160a060020a031681565b600054600160a060020a031681565b600054600160a060020a03163314801561010f575030318111155b1561015457600154604051600160a060020a039091169082156108fc029083906000818181858888f1935050505015801561014e573d6000803e3d6000fd5b50610159565b600080fd5b50565b600054600160a060020a03163314156101aa5760008054604051600160a060020a0390911691303180156108fc02929091818181858888f19350505050158015610159573d6000803e3d6000fd5b5600a165627a7a72305820e5561ca70d2489bcbaac3b7c8eea521452511a68b252230edfd6bf7b8bd4bf350029",
		"opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH2 0x10 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x40 MLOAD PUSH1 0x20 DUP1 PUSH2 0x237 DUP4 CODECOPY DUP2 ADD PUSH1 0x40 MSTORE MLOAD PUSH1 0x0 DUP1 SLOAD PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB NOT SWAP1 DUP2 AND CALLER OR SWAP1 SWAP2 SSTORE PUSH1 0x1 DUP1 SLOAD PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB SWAP1 SWAP4 AND SWAP3 SWAP1 SWAP2 AND SWAP2 SWAP1 SWAP2 OR SWAP1 SSTORE PUSH2 0x1D8 DUP1 PUSH2 0x5F PUSH1 0x0 CODECOPY PUSH1 0x0 RETURN STOP PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x4 CALLDATASIZE LT PUSH2 0x61 JUMPI PUSH4 0xFFFFFFFF PUSH29 0x100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 CALLDATALOAD DIV AND PUSH4 0x66D003AC DUP2 EQ PUSH2 0x63 JUMPI DUP1 PUSH4 0x8DA5CB5B EQ PUSH2 0x94 JUMPI DUP1 PUSH4 0xE1152343 EQ PUSH2 0xA9 JUMPI DUP1 PUSH4 0xEA8A1AF0 EQ PUSH2 0xC1 JUMPI JUMPDEST STOP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x6F JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x78 PUSH2 0xD6 JUMP JUMPDEST PUSH1 0x40 DUP1 MLOAD PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB SWAP1 SWAP3 AND DUP3 MSTORE MLOAD SWAP1 DUP2 SWAP1 SUB PUSH1 0x20 ADD SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0xA0 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x78 PUSH2 0xE5 JUMP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0xB5 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x61 PUSH1 0x4 CALLDATALOAD PUSH2 0xF4 JUMP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0xCD JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x61 PUSH2 0x15C JUMP JUMPDEST PUSH1 0x1 SLOAD PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB AND DUP2 JUMP JUMPDEST PUSH1 0x0 SLOAD PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB AND DUP2 JUMP JUMPDEST PUSH1 0x0 SLOAD PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB AND CALLER EQ DUP1 ISZERO PUSH2 0x10F JUMPI POP ADDRESS BALANCE DUP2 GT ISZERO JUMPDEST ISZERO PUSH2 0x154 JUMPI PUSH1 0x1 SLOAD PUSH1 0x40 MLOAD PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB SWAP1 SWAP2 AND SWAP1 DUP3 ISZERO PUSH2 0x8FC MUL SWAP1 DUP4 SWAP1 PUSH1 0x0 DUP2 DUP2 DUP2 DUP6 DUP9 DUP9 CALL SWAP4 POP POP POP POP ISZERO DUP1 ISZERO PUSH2 0x14E JUMPI RETURNDATASIZE PUSH1 0x0 DUP1 RETURNDATACOPY RETURNDATASIZE PUSH1 0x0 REVERT JUMPDEST POP PUSH2 0x159 JUMP JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST POP JUMP JUMPDEST PUSH1 0x0 SLOAD PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB AND CALLER EQ ISZERO PUSH2 0x1AA JUMPI PUSH1 0x0 DUP1 SLOAD PUSH1 0x40 MLOAD PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB SWAP1 SWAP2 AND SWAP2 ADDRESS BALANCE DUP1 ISZERO PUSH2 0x8FC MUL SWAP3 SWAP1 SWAP2 DUP2 DUP2 DUP2 DUP6 DUP9 DUP9 CALL SWAP4 POP POP POP POP ISZERO DUP1 ISZERO PUSH2 0x159 JUMPI RETURNDATASIZE PUSH1 0x0 DUP1 RETURNDATACOPY RETURNDATASIZE PUSH1 0x0 REVERT JUMPDEST JUMP STOP LOG1 PUSH6 0x627A7A723058 KECCAK256 0xe5 JUMP SHR 0xa7 0xd 0x24 DUP10 0xbc 0xba 0xac EXTCODESIZE PUSH29 0x8EEA521452511A68B252230EDFD6BF7B8BD4BF35002900000000000000 ",
		"sourceMap": "28:1372:0:-;;;572:228;8:9:-1;5:2;;;30:1;27;20:12;5:2;572:228:0;;;;;;;;;;;;;683:5;:19;;-1:-1:-1;;;;;;683:19:0;;;692:10;683:19;;;;;777:17;;-1:-1:-1;;;;;777:17:0;;;;;;;;;;;;;28:1372;;;;;;"
	},

  },

  //  ╦  ╦╔═╗╔═╗╔═╗╦ ╦╔═╗╦  ╔═╗
  //  ║  ║╠╣ ║╣ ║  ╚╦╝║  ║  ║╣
  //  ╩═╝╩╚  ╚═╝╚═╝ ╩ ╚═╝╩═╝╚═╝
  beforeMount: function() {
    // Attach any initial data from the server.
    _.extend(this, SAILS_LOCALS);
  },
  mounted: async function() {
    //…
  },

  //  ╦╔╗╔╔╦╗╔═╗╦═╗╔═╗╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
  //  ║║║║ ║ ║╣ ╠╦╝╠═╣║   ║ ║║ ║║║║╚═╗
  //  ╩╝╚╝ ╩ ╚═╝╩╚═╩ ╩╚═╝ ╩ ╩╚═╝╝╚╝╚═╝
  methods: {

    clickOpenDeployModalButton: async function() {
      this.deployModalVisible = true;
      this.yourAccount = web3Interface.eth.defaultAccount;

    },

    clickOpenFundModalButton: async function() {
      this.status = "";
      this.fundModalVisible = true;
      this.remoteBalance();
    },

    clickOpenPayoutModalButton: async function() {
      this.status = "";
      this.payoutModalVisible = true;
    },    

    clickOpenCancelModalButton: async function() {
      this.status = "";
      this.cancelModalVisible = true;
    },

    closeDeployModal: async function() {       
    	this.deployModalVisible = false;
    },

    closeFundModal: async function() {       
    	this.fundModalVisible = false;
    },

    closePayoutModal: async function() {       
    	this.payoutModalVisible = false;
    },

    closeCancelModal: async function() {       
    	this.cancelModalVisible = false;
    },

    remoteBalance: async function () {
      // Get the balance in Eth of the account field
      var account = web3Interface.eth.defaultAccount;
      console.log("Eth account:", account);
      var self = this;
      if(web3Interface.isAddress(account)) {
        if(typeof(web3Interface.eth)!= 'undefined') {
          web3Interface.eth.getBalance(account, function(error, result){
            if(!error) {
              console.log('Balance in Wei '+result);
              var balanceText = web3Interface.fromWei(result,'ether') + ' Eth';
              console.log("Account balance is ", balanceText);
              self.injectedBalance = balanceText;
            }
            else {
              console.log("Could not get balance of ethAddress");
              self.injectedBalance = "Could not get balance of ethAddress";
            }
          }); 
        }
      }
    },

    DeployContract: async function() {

    	this.status = "Deploying contract";
		var payee = this.payAccount ;
		var self = this;
		var paymentmilestoneContract = web3Interface.eth.contract([{"constant":true,"inputs":[],"name":"recipient","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"payout","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"cancel","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"payee","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"from","type":"address"},{"indexed":false,"name":"to","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"Sent","type":"event"}]);
		var paymentmilestone = paymentmilestoneContract.new(
   			payee,
			   {
			     from: web3Interface.eth.accounts[0], 
			     data: '0x608060405234801561001057600080fd5b50604051602080610237833981016040525160008054600160a060020a0319908116331790915560018054600160a060020a03909316929091169190911790556101d88061005f6000396000f3006080604052600436106100615763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166366d003ac81146100635780638da5cb5b14610094578063e1152343146100a9578063ea8a1af0146100c1575b005b34801561006f57600080fd5b506100786100d6565b60408051600160a060020a039092168252519081900360200190f35b3480156100a057600080fd5b506100786100e5565b3480156100b557600080fd5b506100616004356100f4565b3480156100cd57600080fd5b5061006161015c565b600154600160a060020a031681565b600054600160a060020a031681565b600054600160a060020a03163314801561010f575030318111155b1561015457600154604051600160a060020a039091169082156108fc029083906000818181858888f1935050505015801561014e573d6000803e3d6000fd5b50610159565b600080fd5b50565b600054600160a060020a03163314156101aa5760008054604051600160a060020a0390911691303180156108fc02929091818181858888f19350505050158015610159573d6000803e3d6000fd5b5600a165627a7a72305820e5561ca70d2489bcbaac3b7c8eea521452511a68b252230edfd6bf7b8bd4bf350029', 
			     gas: '4700000',
			     gasPrice: web3Interface.toHex(2000000000),
			   }, function (e, contract){
			    console.log(e, contract);
			    if (typeof contract.address !== 'undefined') {
			    	self.status = 'Deployed';
			    	self.contractAddress = contract.address;
			    	self.etherscanContract = "https://rinkeby.etherscan.io/address/"+contract.address;
			        console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
			    }
		});
    },

    FundContract: async function() {

      const gasLimit = 300000;
      var self=this;

      var transfer = web3Interface.eth.sendTransaction( 
        {
          from: web3Interface.eth.defaultAccount, 
          to: this.contractAddress,
          value: web3Interface.toWei(0.01,"ether"),
        }, function(error, txHash) {
          if (error) {
            console.error(error)
          } else {
            console.log("Funding sent " + txHash)
            self.status = "Funding sent";
            self.etherscan = "https://rinkeby.etherscan.io/tx/"+txHash;
            // Wait for transaction to complete
            self.getTransactionReceiptMined(txHash, 500);
          }
        }); 


	},

    getTransactionReceiptMined: function(txHash, interval) {
      const self = this;
      const transactionReceiptAsync = function(resolve, reject) {
          web3Interface.eth.getTransactionReceipt(txHash, (error, receipt) => {
              if (error) {
                  reject(error);
              } else if (receipt == null) {
                  setTimeout(
                      () => transactionReceiptAsync(resolve, reject),
                      interval ? interval : 500);
              } else {
                  self.status = "Transaction settled";
                  resolve(receipt);
              }
          });
      };

      if (Array.isArray(txHash)) {
          return Promise.all(txHash.map(
              oneTxHash => self.getTransactionReceiptMined(oneTxHash, interval)));
      } else if (typeof txHash === "string") {
          return new Promise(transactionReceiptAsync);
      } else {
          throw new Error("Invalid Type: " + txHash);
      }
    },  

    PayoutContract: async function() {

      const contractAddress=this.contractAddress;
      const gasLimit = 300000;
      const contract = web3Interface.eth.contract(this.contractABI);
      const contractInstance = contract.at(contractAddress);
      const fromAccount = web3Interface.eth.defaultAccount;
      const payoutAmount = web3Interface.toWei(0.005,"ether");
      var self=this;

      const transactionObject = {
        from: fromAccount,
        gas: web3Interface.toHex(gasLimit),
        gasPrice: web3Interface.toHex(2000000000), //2 GWei
      };

      contractInstance.payout.sendTransaction(
          payoutAmount, transactionObject, (error, result) => { 
            // Check if worked
            if(error) {
              console.log(result);
              this.status="Transaction error";
            }
            else {
              console.log(result);
              this.status="Transaction sent";
              this.etherscan = "https://rinkeby.etherscan.io/tx/"+result;
              self.getTransactionReceiptMined(result, 500);
            }
      });

    },

    CancelContract: async function() {

      const contractAddress=this.contractAddress;
      const gasLimit = 300000;
      const contract = web3Interface.eth.contract(this.contractABI);
      const contractInstance = contract.at(contractAddress);
      const fromAccount = web3Interface.eth.defaultAccount;
      var self=this;

      const transactionObject = {
        from: fromAccount,
        gas: web3Interface.toHex(gasLimit),
        gasPrice: web3Interface.toHex(2000000000), //2 GWei
      };

      contractInstance.cancel.sendTransaction(transactionObject, (error, result) => { 
            // Check if worked
            if(error) {
              console.log(result);
              this.status="Transaction error";
            }
            else {
              console.log(result);
              this.status="Transaction sent";
              this.etherscan = "https://rinkeby.etherscan.io/tx/"+result;
              self.getTransactionReceiptMined(result, 500);
            }
      });

    },

  }
});
