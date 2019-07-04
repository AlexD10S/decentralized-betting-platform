var WalletProvider = require("truffle-wallet-provider");
const Wallet = require('ethereumjs-wallet');

var ropstenPrivateKey = new Buffer("F3658897C1AAF60C9D5DA1E9EC07E96327D79C68FE9CCD2253E7C888485EA6DE","hex");
var ropstenWallet = Wallet.fromPrivateKey(ropstenPrivateKey);
var ropstenProvider = new WalletProvider(ropstenWallet, "https://ropsten.infura.io/v3/d798eff4678a4b218286fcd814485c72");

var HDWalletProvider = require("truffle-hdwallet-provider");
var provider = new HDWalletProvider("F3658897C1AAF60C9D5DA1E9EC07E96327D79C68FE9CCD2253E7C888485EA6DE", "https://ropsten.infura.io/v3/d798eff4678a4b218286fcd814485c72");

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