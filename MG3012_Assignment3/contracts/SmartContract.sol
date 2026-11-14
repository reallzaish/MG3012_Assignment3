
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract MessageBoard {

    string private message;
    address private lastUpdatedBy;
    uint256 private updateCount;

    // Function 1: Store or update a message
    function setMessage(string memory _message) public {
        message = _message;
        lastUpdatedBy = msg.sender;
        updateCount++;
    }

    // Function 2: Read the stored message
    function getMessage() public view returns (string memory) {
        return message;
    }

    // Function 3: Get the last updating wallet
    function getLastUpdatedBy() public view returns (address) {
        return lastUpdatedBy;
    }

    // Function 4: Get the number of updates
    function getUpdateCount() public view returns (uint256) {
        return updateCount;
    }
}
