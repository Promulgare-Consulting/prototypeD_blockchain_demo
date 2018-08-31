  // web3 can come injected from a browser plugin or remote access to a public node
  var web3Interface;
  // What type is this one? (Injected, Remote)
  // Need two booleans here as ng-if does not have an else condition for conditional includes
  var web3Injected = false;
  var web3Remote = false;
  var web3Ver = "";
  var web3Network = "";

  window.addEventListener('load', function() {
    console.log("Looking for web3");
    // Check if Web3 has not been injected by the browser: MetaMask
    if (typeof window.web3 !== 'undefined') {
      console.log('Using wallet web3');
      // use the web3 provider inserted into the browser
      web3Interface = new Web3(window.web3.currentProvider);
      web3Injected=true;
    }
    else {
      console.log('Loading web3 javascript and connecting to node');

      //const Web3 = require('web3')
      // Use the infura open node for web3
      web3Interface = new Web3(new Web3.providers.HttpProvider('https://rinkeby.infura.io/Oi8SElNW8FHvmOFIzVUs'));
      web3Remote=true;
	}

    // Find the version of the ethereum node we are connected to
    web3Interface.version.getNode(function(error, result){
      if(!error) {
        console.log('Web3 version',result);
        web3Ver=result;
      }
      else {
        console.log('Error calling getNode',error);
        web3Ver=error;
      }
    });

    //  What network does this provider connect to
    web3Interface.version.getNetwork(function(error, result){
      if(!error) {
        console.log('Web3 network',result);
        web3Network=result;
      }
      else {
        console.log('Error calling getetwork',error);
        web3Network=error;
      }
    });

  });
