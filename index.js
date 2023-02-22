const { Network, Alchemy } = require("alchemy-sdk");

const settings = {
    apiKey: "UjFBftMZ4pFCUjil-ydERCfghWqW8faT",
    network: Network.ETH_GOERLI,
};

const alchemy = new Alchemy(settings);

async function main() {
    const latestBlock = await alchemy.core.getBlockNumber('latest');
    console.log("The latest block number is", latestBlock);
  }
  
main();