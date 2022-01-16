import * as dotenv from "dotenv";

import { HardhatUserConfig, task } from "hardhat/config";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "hardhat-gas-reporter";
import "solidity-coverage";
import "hardhat-deploy";

dotenv.config();

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

const config: HardhatUserConfig = {
  solidity: {
    version: '0.8.9',
    settings: {
      optimizer: {
        enabled: true,
        runs: 1_000,
      },
      metadata: {
        bytecodeHash: 'none',
      },
    },  
  },

  networks: {
    'optimism-testnet': {
      url: 'https://kovan.optimism.io',
      accounts: [process.env.PK!],
      // accounts: {
      //   mnemonic: process.env.MNEMONIC
      // },
    },
    'arbitrum-testnet': {
      url: 'https://rinkeby.arbitrum.io/rpc',
      accounts: [process.env.PK!],
      // accounts: {
      //   mnemonic: process.env.MNEMONIC
      // },
    },
  },

  namedAccounts: {
    deployer: {
      default: 0,
    },
  },

  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: "USD",
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
};

export default config;
