# DecentralizedBettingPlatform

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


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
truffle migrate --network ropsten