# DecentralizedBettingPlatform

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Instrutions Smart Contract
First install the dependencies needed for our dapp: web3, truffle-contract, truffle-wallet-provider & ethereumjs-wallet:

npm install web3 truffle-contract truffle-wallet-provider ethereumjs-wallet --save

Then, initialize truffle:
truffle init

Compile the smart contract, and run for testing purposes with REMIX:
https://remix.ethereum.org/

To deploy in Ethereum Network
For testing purposes I will use the Ropsten testing network
First I go to Infura and I create a project: BettingPlatform
Then I put some ether (test one with a faucet) to an account managed with Metamask
Complete the file truffle.js with your data (Infura end point and metamask account private key)

Then compile
truffle compile
And migrate the contract on the Ropsten Test network:
truffle migrate —-reset — network ropsten
or 
truffle deploy --network ropsten

To test contract has been deployed:
truffle console --network ropsten
Betting.deployed().then(function(instance){return instance });


To test with ganache
truffle migrate — compile-all — reset — network ganache
