require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  defaultNetwork: "sepolia",
  networks: {
    hardhat: {
    },
    sepolia: {
      url: process.env.SELOPIA_ALCHEMY_URL,
      accounts: [process.env.PRIVATE_KEY]
    }
  },
};
