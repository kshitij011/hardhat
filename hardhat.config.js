require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
    },
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/c4KikJbthtWDAlrUE2MuRTDUrSuzmnsq",
      accounts: ["7a19b0d53f9f119d552522fe15dac7f09b15136fb036bc63660a7dedfd319f72"]
    }
  },
  solidity: "0.8.24",
};
