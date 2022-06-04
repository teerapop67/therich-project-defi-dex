require("@nomiclabs/hardhat-waffle");
require("hardhat-deploy");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

const privateKey =
  "e2a94b604d236c3c398f784339d330d75177cd61cb5e4f636e50e76a7350eb79";

module.exports = {
  defaultNetwork: "hardhat",

  networks: {
    hardhat: {},

    moonbase: {
      url: "https://rpc.api.moonbase.moonbeam.network",
      accounts: [privateKey],
      chainId: 1287,
    },
  },
  solidity: {
    compilers: [
      {
        version: "0.8.0",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
  paths: {
    sources: "./contracts",
    cache: "./cache",
    artifacts: "./artifacts",
  },
  mocha: {
    timeout: 20000,
  },
};
