const HDWalletProvider = require('@truffle/hdwallet-provider');
require('dotenv').config();

module.exports = {
 
  networks: {
    development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 8545,            // Standard Ethereum port (default: none)
     network_id: "*",       // Any network (default: none)
    },
    goerli:{
      provider: function() {return new HDWalletProvider({mnemonic:{phrase:`${process.env.MNEMONIC}`},providerOrUrl:`https://goerli.infura.io/v3/${process.env.INFURA_ID}`})},
      network_id:5,
    },

    sepolia:{
      provider: function() {return new HDWalletProvider({mnemonic:{phrase:`${process.env.MNEMONIC}`},providerOrUrl:`https://eth-sepolia.g.alchemy.com/v2/${process.env.ALCHEMY_ID}`})},
     network_id:11155111,
   },

    mumbai:{
      provider: function() {return new HDWalletProvider({mnemonic:{phrase:`${process.env.MNEMONIC}`},providerOrUrl:`https://polygon-mumbai.g.alchemy.com/v2/${process.env.ALCHEMY_ID2}`})},
     network_id:80001,
 }
 },

  mocha: {

 },

  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/',

  compilers: {
    solc: {
      version: "0.8.19",      // Fetch exact version from solc-bin (default: truffle's version)
       settings: {          // See the solidity docs for advice about optimization and evmVersion
        optimizer: {
         enabled: false,
         runs: 200,
      }
    }
  }
}}