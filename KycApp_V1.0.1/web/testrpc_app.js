//import fs from "fs";

$(document).ready(function(){


//import * as fs from "node_modules/fs";
//web3 declaration

//var fs = require('./node_modules/fs');


if (typeof web3 !== 'undefined') {
  web3 = new Web3(web3.currentProvider);
} else {
  // set the provider you want from Web3.providers
  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}
	
  var accounts = web3.eth.accounts;

//web3 declaration end

$('#submitRequest').click(function() {

		var name    = $('#name').val();
        var email   = $('#email').val();
        var ssn     = $('#ssn').val();
        var contact = $('#contact').val();
        var address = $('#address').val();
        //web3.KycCustomer.deployed().then(function(instance){return instance.addCustomer(name,contact,ssn,'true');})

        //let source = require('../build/contracts/KycCustomer.json');
		//let contracts = JSON.parse(source)["contracts"];
		//let abi = JSON.parse(contracts.KycCustomer.abi);
		//var Kycabi = abi;
		console.log(KycCustomer.deployed());
        //var contract = web3.eth.contract(Kycabi).at('0x785a387ace023971516137f958d9dd4cebaf3941');

        //contract.addCustomer(name,contact,ssn,'true');

});


});	

/**
window.onload = function() {


if (typeof web3 !== 'undefined') {
  web3 = new Web3(web3.currentProvider);
} else {
  // set the provider you want from Web3.providers
  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}
	
  var accounts = web3.eth.accounts;
  console.log(accounts);
}
*/