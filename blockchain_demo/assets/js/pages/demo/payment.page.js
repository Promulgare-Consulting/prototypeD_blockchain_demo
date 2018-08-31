parasails.registerPage('payment', {
  //  ╦╔╗╔╦╔╦╗╦╔═╗╦    ╔═╗╔╦╗╔═╗╔╦╗╔═╗
  //  ║║║║║ ║ ║╠═╣║    ╚═╗ ║ ╠═╣ ║ ║╣
  //  ╩╝╚╝╩ ╩ ╩╩ ╩╩═╝  ╚═╝ ╩ ╩ ╩ ╩ ╚═╝
  data: {
    addressModalVisible: false,
    injectedModalVisible: false,
    contractModalVisible: false,
    category: "T-Shirts  .01ETH",
    price: .01,
    image: "/images/200x181shirt_guys_10.jpg",
    inventory: [
    	{
    		sku: 123,
    		name: "Sunsets",
    		image: "/images/400x362shirt_guys_10.jpg" 
    	},
    	{
    		sku: 124,
    		name: "Rhino",
    		image: "/images/400x362shirt_guys_11.jpg"
    	},
    	{
    		sku: 125,
    		name: "Universe",
    		image: "/images/400x362shirt_guys_12.jpg"
    	}
    ],
    cart: 0,
    total: 0,
    ethAccount: "0x5aB5E52245Fd4974499aa625709EE1F5A81c8157",
    metamask: "/images/fox55.png",
    selected: "/images/400x362shirt_guys_10.jpg",
    injectedBalance: "",
    status: "",
    etherscan: "",
    customerID: 0,
    sku: 51947,
    invoiceId: 1,

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

    clickOpenAddressModalButton: async function() {
      this.addressModalVisible = true;
    },

    clickOpenInjectedModalButton: async function() {
      this.injectedModalVisible = true;
      this.remoteBalance();
    },

    clickOpenContractModalButton: async function() {
      this.customerID=window.SAILS_LOCALS.me.id;
      this.contractModalVisible = true;
      this.remoteBalance();
    },

    closeAddressModal: async function() {
      this.addressModalVisible = false;
    },

    closeInjectedModal: async function() {
      this.injectedModalVisible = false;
    },

    closeContractModal: async function() {
      this.contractModalVisible = false;
    },

    addToCart() {
      this.cart += 1;
      this.total = this.cart*this.price;
    },

    onCopy: function (e) {
      alert('Account copied to clipboard: ' + e.text);
    },

    onError: function (e) {
      alert('Failed to copy texts');
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

    sendPayment: async function () {
      console.log("Send payment");
      // 'this' instance changes inside the web3 call, save it to another variable
      self = this;
      self.status = "Transaction pending";

      var transfer = web3Interface.eth.sendTransaction( 
        {
          from: web3Interface.eth.defaultAccount, 
          to: "0x5aB5E52245Fd4974499aa625709EE1F5A81c8157",
          value: web3Interface.toWei(self.total,"ether"),
        }, function(error, txHash) {
          if (error) {
            console.error(error)
          } else {
            console.log("Transaction sent " + txHash)
            self.status = "Transaction sent";
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


    contractPayment: function() {
      // Contract ABI required for contract object
      const contractAbi = [
        {
          "constant": false,
          "inputs": [],
          "name": "empty",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "name": "userId",
              "type": "uint256"
            },
            {
              "name": "invoiceId",
              "type": "uint256"
            },
            {
              "name": "sku",
              "type": "uint256"
            },
            {
              "name": "quantity",
              "type": "uint256"
            },
            {
              "name": "price",
              "type": "uint256"
            },
            {
              "name": "payment",
              "type": "uint256"
            }
          ],
          "name": "purchase",
          "outputs": [],
          "payable": true,
          "stateMutability": "payable",
          "type": "function"
        },
        {
          "inputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "constructor"
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
          "constant": true,
          "inputs": [
            {
              "name": "",
              "type": "uint256"
            },
            {
              "name": "",
              "type": "uint256"
            }
          ],
          "name": "purchases",
          "outputs": [
            {
              "name": "skuPurchase",
              "type": "uint256"
            },
            {
              "name": "quantityPurchase",
              "type": "uint256"
            },
            {
              "name": "pricePurchase",
              "type": "uint256"
            },
            {
              "name": "paymentPurchase",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        }
      ]

      const contractAddress="0x73b4036E6a3818c2025404F2A69369445aCEE4Bf";
      const gasLimit = 300000;
      const contract = web3Interface.eth.contract(contractAbi);
      const contractInstance = contract.at(contractAddress);
      const fromAccount = web3Interface.eth.defaultAccount;

      const transactionObject = {
        from: fromAccount,
        gas: web3Interface.toHex(gasLimit),
        gasPrice: web3Interface.toHex(2000000000), //2 GWei
        value: web3Interface.toWei(this.total,"ether"),
      };

      contractInstance.purchase.sendTransaction(
          this.customerID, this.invoiceId, this.sku, this.price, this.cart, this.total, transactionObject, (error, result) => { 
            // Check if worked
            if(error) {
              console.log(result);
              this.status="Transaction error";
            }
            else {
              console.log(result);
              this.status="Transaction sent";
              this.etherscan = "https://rinkeby.etherscan.io/tx/"+result;
            }
      });

    },

  }
});
