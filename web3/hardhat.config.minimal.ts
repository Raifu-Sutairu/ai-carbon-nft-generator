import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.28",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/jmdyd6v0tj4qTviuXFhDl",
      accounts: ["49a90053a4d83f875ce21723cdb01bf527c224b6037beebe1f75d1fb975b5f8a"],
      chainId: 11155111
    }
  }
};

export default config;