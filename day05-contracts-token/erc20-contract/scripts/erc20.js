require("dotenv").config(); // adding the environment variable
const ethers = require('ethers');

// Load env
const provider = new ethers.providers.JsonRpcProvider(process.env.QUICKNODE_URL);
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider); // wallet variable and storage
console.log("Private Key:", process.env.PRIVATE_KEY);
// ERC20 Contract config
const tokenAddress = process.env.TOKEN_CONTRACT;
const abi = [
    "function balanceOf(address) view returns (uint256)",
    "function transfer(address to, uint256 amount) returns (bool)",
    "event Transfer(address indexed from, address indexed to, uint256 value)",
];

// connect to contract
const token = new ethers.Contract(tokenAddress, abi, wallet);

async function main() {
    const myAddress = wallet.address;
    const recipient = "0x629f5a17CC803ecf1868646A5D54Bd85C2Fca400";
    const amount = ethers.utils.parseUnits("1.0", 18);

    // Get balance
    const balance = await token.balanceOf(myAddress);
    console.log(`Balance of ${myAddress}:`, ethers.utils.formatUnits(balance, 18));

    //Transfer tokens
    const tx = await token.transfer(recipient, amount);
    console.log("Transfer sent. TX Hash:", tx.hash);

    await tx.wait();
    console.log("Transfer confirmed");
}

main().catch(console.error);