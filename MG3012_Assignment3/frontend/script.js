
const CONTRACT_ADDRESS = "0x7a020458270C4048854ca17512934325a898F836";

let web3;
let contract;
let account;

// Load the Truffle contract artifact
async function loadContract() {
    try {
        const response = await fetch("../build/contracts/MessageBoard.json");
        const artifact = await response.json();

        if (!window.ethereum) {
            alert("Please install MetaMask first.");
            return;
        }

        web3 = new Web3(window.ethereum);

        contract = new web3.eth.Contract(
            artifact.abi,
            CONTRACT_ADDRESS
        );

        await updateDisplay();

    } catch (error) {
        console.error(error);
        alert("Could not load contract. Check your Truffle build folder.");
    }
}

// Connect MetaMask
document.getElementById("connectWallet").onclick = async function () {
    try {
        const accounts = await window.ethereum.request({
            method: "eth_requestAccounts"
        });

        account = accounts[0];

        document.getElementById("account").innerText =
            "Connected: " + account;

        await updateDisplay();

    } catch (error) {
        alert("Wallet connection failed.");
        console.error(error);
    }
};

// Display contract information
async function updateDisplay() {
    if (!contract) return;

    const message = await contract.methods.getMessage().call();
    const count = await contract.methods.getUpdateCount().call();
    const updater = await contract.methods.getLastUpdatedBy().call();

    document.getElementById("message").innerText = message;
    document.getElementById("updateCount").innerText = count;
    document.getElementById("lastUpdatedBy").innerText = updater;
}

// Update message
document.getElementById("updateMessage").onclick = async function () {
    try {
        if (!account) {
            alert("Please connect your wallet first.");
            return;
        }

        const newMessage = document.getElementById("newMessage").value;

        if (!newMessage.trim()) {
            alert("Please enter a message.");
            return;
        }

        await contract.methods.setMessage(newMessage).send({
            from: account
        });

        alert("Message updated successfully!");

        document.getElementById("newMessage").value = "";

        await updateDisplay();

    } catch (error) {
        console.error(error);
        alert("Transaction failed.");
    }
};

// Initialize
loadContract();
