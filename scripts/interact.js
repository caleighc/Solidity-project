const API_KEY = process.env.API_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;

const { ethers } = require("hardhat");
const contract = require("../artifacts/contracts/HelloWorld.sol/HelloWorld.json");

// Provider that gives read and write access
const alchemyProvider = new ethers.providers.AlchemyProvider(network="goerli", API_KEY);
// Singer represents the account that can sign transactions
const singer = new ethers.Wallet(PRIVATE_KEY, alchemyProvider);
// Object that represents the contract on the blockchain
const helloWorldContract = new ethers.Contract(CONTRACT_ADDRESS, contract.abi, singer);

// Read the initial message 
async function main() {
    const message = await helloWorldContract.message();
    console.log("The message is: " + message);

    // Update the message 
    const tx = await helloWorldContract.update("This is the updated message");
    await tx.wait();

    // Stores the new message
    const newMessage = await helloWorldContract.message();
    console.log("New message: " + newMessage);
    console.log("New message: " + newMessage);
}

main();

