parasails.registerPage('reservation', {
  //  ╦╔╗╔╦╔╦╗╦╔═╗╦    ╔═╗╔╦╗╔═╗╔╦╗╔═╗
  //  ║║║║║ ║ ║╠═╣║    ╚═╗ ║ ╠═╣ ║ ║╣
  //  ╩╝╚╝╩ ╩ ╩╩ ╩╩═╝  ╚═╝ ╩ ╩ ╩ ╩ ╚═╝

  data: {
    reservationModalVisible: false,
    ethAccount: "0x5aB5E52245Fd4974499aa625709EE1F5A81c8157",
    metamask: "/images/fox55.png",
    selected: "/images/400x362shirt_guys_10.jpg",
    injectedBalance: "",
    status: "",
    etherscan: "",
    customerID: 0,
    sku: 51947,
    invoiceId: 1,
    myContract: 0,
    calendarCalls: 0,
    bookings: [],
    today: new Date(),
    checkDate: 0,
    fcEvents : [
		{
	      title : 'Sunny Out of Office',
	      start : '2018-08-25',
	      end : '2018-08-27'
	    }
	],
    tokenABI: 
	    [
			{
				"constant": true,
				"inputs": [
					{
						"name": "",
						"type": "uint256"
					}
				],
				"name": "reservations",
				"outputs": [
					{
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
				"name": "name",
				"outputs": [
					{
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
						"name": "_spender",
						"type": "address"
					},
					{
						"name": "_value",
						"type": "uint256"
					}
				],
				"name": "approve",
				"outputs": [
					{
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
				"name": "totalSupply",
				"outputs": [
					{
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
						"name": "reservationDate",
						"type": "uint256"
					},
					{
						"name": "userId",
						"type": "uint256"
					}
				],
				"name": "reserveDate",
				"outputs": [],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"constant": false,
				"inputs": [
					{
						"name": "_from",
						"type": "address"
					},
					{
						"name": "_to",
						"type": "address"
					},
					{
						"name": "_value",
						"type": "uint256"
					}
				],
				"name": "transferFrom",
				"outputs": [
					{
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
				"name": "INITIAL_SUPPLY",
				"outputs": [
					{
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
						"name": "_spender",
						"type": "address"
					},
					{
						"name": "_subtractedValue",
						"type": "uint256"
					}
				],
				"name": "decreaseApproval",
				"outputs": [
					{
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
				"inputs": [
					{
						"name": "_owner",
						"type": "address"
					}
				],
				"name": "balanceOf",
				"outputs": [
					{
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
				"inputs": [],
				"name": "symbol",
				"outputs": [
					{
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
						"name": "_to",
						"type": "address"
					},
					{
						"name": "_value",
						"type": "uint256"
					}
				],
				"name": "transfer",
				"outputs": [
					{
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
				"inputs": [
					{
						"name": "reservationDate",
						"type": "uint256"
					}
				],
				"name": "getReservation",
				"outputs": [
					{
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
						"name": "_spender",
						"type": "address"
					},
					{
						"name": "_addedValue",
						"type": "uint256"
					}
				],
				"name": "increaseApproval",
				"outputs": [
					{
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
				"inputs": [
					{
						"name": "_owner",
						"type": "address"
					},
					{
						"name": "_spender",
						"type": "address"
					}
				],
				"name": "allowance",
				"outputs": [
					{
						"name": "",
						"type": "uint256"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "constructor"
			},
			{
				"anonymous": false,
				"inputs": [
					{
						"indexed": true,
						"name": "from",
						"type": "address"
					},
					{
						"indexed": true,
						"name": "to",
						"type": "address"
					},
					{
						"indexed": false,
						"name": "value",
						"type": "uint256"
					}
				],
				"name": "Transfer",
				"type": "event"
			},
			{
				"anonymous": false,
				"inputs": [
					{
						"indexed": true,
						"name": "owner",
						"type": "address"
					},
					{
						"indexed": true,
						"name": "spender",
						"type": "address"
					},
					{
						"indexed": false,
						"name": "value",
						"type": "uint256"
					}
				],
				"name": "Approval",
				"type": "event"
			}
		],

  },

  //  ╦  ╦╔═╗╔═╗╔═╗╦ ╦╔═╗╦  ╔═╗
  //  ║  ║╠╣ ║╣ ║  ╚╦╝║  ║  ║╣
  //  ╩═╝╩╚  ╚═╝╚═╝ ╩ ╚═╝╩═╝╚═╝
  beforeMount: function() {
    // Attach any initial data from the server.
    _.extend(this, SAILS_LOCALS);
  },
  mounted: async function() {
    //… walk through this month's days and see if they have been booked
  },

  //  ╦╔╗╔╔╦╗╔═╗╦═╗╔═╗╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
  //  ║║║║ ║ ║╣ ╠╦╝╠═╣║   ║ ║║ ║║║║╚═╗
  //  ╩╝╚╝ ╩ ╚═╝╩╚═╩ ╩╚═╝ ╩ ╩╚═╝╝╚╝╚═╝

  //created() {
	//this.$on('daySelected', this.daySelected);
  //},


  methods: {
  	daySelected: function(reserveDate, day) {
  		console.log("Selected date: ", reserveDate);
  		this.reserveDate(parseInt(reserveDate));
  	},


  	bookingInfo: function(reserveDate, day) {
  		console.log("Booking info for ", reserveDate);
  		for (var i = 0; i < this.bookings.length; i++) {
  			if(this.bookings[i].date==reserveDate) {
		  		day.booking = this.bookings[i].booking;
		  		break;
  			}
  		}
  	},

  	contractSetup: function() {
      	console.log("Start contractSetup");
      	const contract = web3Interface.eth.contract(this.tokenABI).at("0x602d0a0f4a48A552b8ABbA947Be993cF6B20C71D");
	    this.myContract = contract;
      	console.log("Completed contractSetup");
  	},

  	isDateAvailable: function(date) {
  		var self = this;
        const transactionObject = {
	        from: web3Interface.eth.defaultAccount,
	        gas: web3Interface.toHex(300000),
	        gasPrice: web3Interface.toHex(2000000000), //2 GWei
        };
      	console.log("Check availability for: ", date);
	  	this.myContract.getReservation(parseInt(date), transactionObject, (error, result) => {
	  		if(parseInt(result["c"][0])>0) {
	  			// Find name from user database
  				console.log("Find email for user ", result["c"][0]);
	  			
			    axios.get(`/getUserEmail?userId=2`)
			    .then(response => {
	  				// JSON responses are automatically parsed.
	  				console.log("Got email", response.data.email);
    				self.bookings.push({"date": date, "booking": response.data.email});
			    })
			    .catch(e => {
			      console.log(e);
			    })
			}
		});		
  	},

  	reserveDate: function(date) {

  		var self = this;
        const transactionObject = {
	        from: web3Interface.eth.defaultAccount,
	        gas: web3Interface.toHex(300000),
	        gasPrice: web3Interface.toHex(2000000000), //2 GWei
        };
      	console.log("Set reservation: ", date);
	  	this.myContract.reserveDate(parseInt(date), window.SAILS_LOCALS.me.id, transactionObject, (error, result) => {
			console.log("From blockchain ", result);
		});		

  	},

  	formatDate: function(dateInput) {
  		return dateInput.getFullYear().toString() + dateInput.getMonth().toString().padStart(2, '0') + dateInput.getDate().toString().padStart(2, '0');

  	},

    clickOpenReservationModalButton: async function() {
		date = new Date();
		locale = "en-us";
		this.contractSetup();
	    this.contractSetup();
	    var today = new Date();
	    var firstDay=new Date(today.getFullYear(), today.getMonth()+1, 1);
	    var lastDay=new Date(today.getFullYear(), today.getMonth()+2, 0);
	    for (var d = firstDay; d <= lastDay; d.setDate(d.getDate() + 1)) {
	    	this.isDateAvailable(this.formatDate(d));
		}
      	this.reservationModalVisible = true;
    },

    closeReservationModal: async function() {
      this.reservationModalVisible = false;
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

  }
});
