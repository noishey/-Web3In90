// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract HelloWorld {
    string public message = "Hello World!";

    function setMessage(string memory _msg) public {
        message = _msg;
    }
}