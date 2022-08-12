require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

const RINKEBY_URL = process.env.RINKEBY_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  // defaultNetwork: "rinkeby",
  // networks: {
  //   hardhat: {
  //   },
  //   rinkeby: {
  //     url: "https://eth-rinkeby.alchemyapi.io/v2/123abc123abc123abc123abc123abcde",
  //     accounts: []
  //   }
  // },
  // networks: {
  //   rinkeby: {
  //     url: RINKEBY_URL,
  //     accounts: [PRIVATE_KEY],
  //   },
  // },
  solidity: {
    version: "0.8.9",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  // paths: {
  //   sources: "./contracts",
  //   tests: "./test",
  //   cache: "./cache",
  //   scripts: "./scripts",
  // },
  // mocha: {
  //   timeout: 40000,
  // },
};
