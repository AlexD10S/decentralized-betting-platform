import { Injectable } from '@angular/core';
import Web3 from 'web3';
import * as TruffleContract from 'truffle-contract';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { fromPromise } from 'rxjs/internal/observable/fromPromise';

declare let require: any;
declare let window: any;
let tokenAbi = require('../../../build/contracts/Betting.json');

@Injectable({
  providedIn: 'root'
})
export class EthcontractService {
  private web3Provider = window.web3
  public contracts;
  private instanceBetting;
  private weiConversion = 1000000000000000000;
  private amountHome = 0;

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
    // this.contracts.deployed().then(function(instance) {
    //   this.instanceBetting = instance;
    // });
    // this.contracts.deployed().then(function(instance){
    //   console.log("instance")
    //   console.log(instance.address);
    //   address = instance.address;
    // });
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

  // test(_matchSelected: number){
  //   console.log("TEST");
  //     this.contracts.deployed().then(function(instance) {
  //       console.log(instance);
  //       instance.AmountHome(_matchSelected,(err, res)=>{
  //         console.log(""+ res);
  //         return res;
  //     });
  //   });

  // }

  getAmountHome(_matchSelected: number){
    var context = this;
    
    let promise = new Promise(function(resolve,reject){
      context.contracts.deployed().then(function(instance) {
        instance.AmountHome(_matchSelected,(err, res)=>{
          resolve(res);
    })
   })
    });
    return promise;
  }
      
  getAmountAway(_matchSelected: number){
    var context = this;
    let promise = new Promise(function(resolve,reject){
      context.contracts.deployed().then(function(instance) {
        instance.AmountAway(_matchSelected,(err, res)=>{
          resolve(res);
    })
   })
    });
    return promise;
  }


  getAmountDraw(_matchSelected: number){
    var context = this;
    let promise = new Promise(function(resolve,reject){
      context.contracts.deployed().then(function(instance) {
        instance.AmountDraw(_matchSelected,(err, res)=>{
          resolve(res);
    })
   })
    });
    return promise;
  }
  


  // checkIfPlayerExists(): Observable<Boolean>{
  //   window.web3.eth.getAccounts((error, accounts) => {
  //     this.contracts.deployed().then(function(instance) {
  //       return instance.checkIfPlayerExists(accounts[0]);
  //     });
  //   });
  // }

    
}
