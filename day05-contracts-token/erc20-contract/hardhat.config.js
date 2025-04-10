require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;

module.exports = {
  solidity: "0.8.28",
  networks: {
    sepolia: {
      url: "https://sepolia.infura.io/v3/1d9737f00eb04d0eb1f1cb18821dd9bb",
      accounts: [PRIVATE_KEY] // Never commit this
    }
  },
  etherscan: {
    apiKey: {
      sepolia: [ETHERSCAN_API_KEY],
    }
  },
};
