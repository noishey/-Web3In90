const hre = require("hardhat");

async function main() {
    const Token = await hre.ethers.getContractFactory("MyToken"); //js interface for deploying and interacting with myToken.sol
    const token = await Token.deploy(); //deploys it

    await token.waitForDeployment(); // wait for deployment tx

    console.log("Token deployed at:", token.target); // logs the address on-chain
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});