require("@nomiclabs/hardhat-waffle");
const fs = require('fs');
const privateKey = fs.readFileSync(".secret").toString();

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337
    },
    mumbai: {
      url: "https://palm-testnet.infura.io/v3/7ed4a5e6655140218e644bfaa06e95f8",
      accounts: [privateKey],
    },
    mainnet: {
      url: "https://palm-mainnet.infura.io/v3/7ed4a5e6655140218e644bfaa06e95f8",
      accounts: [privateKey],
    }
  },
  solidity: "0.8.4",
};
