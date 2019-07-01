import { Injectable } from '@angular/core';
import Web3 from 'web3';
import * as TruffleContract from 'truffle-contract';
import { Observable, of } from 'rxjs';

declare let require: any;
declare let window: any;
let tokenAbi = require('../../../build/contracts/Betting.json');

@Injectable({
  providedIn: 'root'
})
export class EthcontractService {
  private web3Provider = window.web3
  private contracts;
  private weiConversion = 1000000000000000000;

  constructor() {
    if (typeof window.web3 !== 'undefined') {
      this.web3Provider = window.web3.currentProvider;
    } 
    else {
      this.web3Provider = new Web3.providers.HttpProvider('http://127.0.0.1:9545')
    }
    this.contracts = TruffleContract(tokenAbi);
    this.contracts.setProvider(this.web3Provider);
    // this.contracts.deployed()
    window.web3 = new Web3(this.web3Provider);
  }


  bet(_matchSelected: number , _resultSelected: number, amount ) {
    window.web3.eth.getAccounts((error, accounts) => {
      var amountInWei = amount * this.weiConversion;

      this.contracts.deployed().then(function(instance) {
        return instance.bet(_matchSelected,_resultSelected,
          {from: accounts[0],value: amountInWei});
      }).then(function(result) {
      console.log(result);
      });
    })
  }

  getAmountHome(_matchSelected: number): number{
    var amount = 0;
    window.web3.eth.getAccounts((error, accounts) => {
      this.contracts.deployed().then(function(instance) {
        return instance.AmountHome.call(_matchSelected,{from: accounts[0]});
      }).then(function(result) {
          amount = result;
          console.log("home");
          console.log("match: "+_matchSelected);
          console.log(result);
      });
   });
    return amount;
  }
  getAmountAway(_matchSelected: number){
    var amount = 0;
    window.web3.eth.getAccounts((error, accounts) => {
    this.contracts.deployed().then(function(instance) {
      return instance.AmountAway.call(_matchSelected,{from: accounts[0]});
    }).then(function(result) {
        amount = result;
        console.log("away");
        console.log("match: "+_matchSelected);
        console.log(result);
    });
  });
    return amount;
  }
  getAmountDraw(_matchSelected: number){
    var amount = 0;
    window.web3.eth.getAccounts((error, accounts) => {
    this.contracts.deployed().then(function(instance) {
      return instance.AmountDraw.call(_matchSelected,{from: accounts[0]});
    }).then(function(result) {
        amount = result;
        console.log("draw");
        console.log("match: "+_matchSelected);
        console.log(result);
    });
  });
    return amount;
  }

  // checkIfPlayerExists(): Observable<Boolean>{
  //   window.web3.eth.getAccounts((error, accounts) => {
  //     this.contracts.deployed().then(function(instance) {
  //       return instance.checkIfPlayerExists(accounts[0]);
  //     });
  //   });
  // }

    
}
