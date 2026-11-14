# MessageBoard DApp – MG3012 Assignment 3

## Project Description
MessageBoard is a decentralized application (DApp) developed using Solidity, Truffle, Ganache, MetaMask, and HTML, CSS, and JavaScript.

The application allows users to connect their Ethereum wallet, view the current message stored on the blockchain, and update the message through a smart contract transaction.

## Technologies Used
- Solidity
- Truffle Framework
- Ganache
- MetaMask
- HTML
- CSS
- JavaScript
- Web3.js

## Smart Contract Features
- `setMessage()` – Updates the stored message.
- `getMessage()` – Retrieves the current message.
- `getUpdateCount()` – Displays the total number of updates.
- `getLastUpdatedBy()` – Displays the address of the account that last updated the message.

## Deployment Details
- Network: Ganache Local Blockchain
- RPC URL: `http://127.0.0.1:7545`
- Network ID: `5777`
- Chain ID: `1337`

### Contract Address
`0x7a020458270C4048854ca17512934325a898F836`

## How to Run the Project

1. Install Node.js.
2. Install Truffle.
3. Open Ganache and start the local blockchain.
4. Open the project folder in VS Code.
5. Run the following command to compile the smart contract:

   `truffle compile`

6. Deploy the contract:

   `truffle migrate --network development`

7. Open the `frontend` folder using VS Code Live Server.
8. Connect MetaMask to the Ganache Localhost 8545 network.
9. Connect your wallet and interact with the MessageBoard application.

## Screenshots
The `screenshots` folder contains evidence of:
- Successful smart contract compilation.
- Successful smart contract deployment.
- Frontend interaction with the deployed smart contract.

## Conclusion
This project demonstrates the development and deployment of a decentralized application using the Truffle framework and a local Ethereum blockchain. Users can interact with the smart contract through a simple web-based frontend.

