var WalletProvider = require("truffle-wallet-provider");
const Wallet = require('ethereumjs-wallet');

var ropstenPrivateKey = new Buffer("privatekey","hex");
var ropstenWallet = Wallet.fromPrivateKey(ropstenPrivateKey);
var ropstenProvider = new WalletProvider(ropstenWallet, "https://ropsten.infura.io/v3/keyfrominfura");

var HDWalletProvider = require("truffle-hdwallet-provider");
var provider = new HDWalletProvider("privatekey", "https://ropsten.infura.io/v3/keyfrominfura");

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    ropsten: {
      provider: provider,
      gas: 4600000,
      network_id: 3
    }
  },
  compilers: {
    solc: {
      version: "0.4.2"  // ex:  "0.4.20". (Default: Truffle's installed solc)
    }
  }
};
