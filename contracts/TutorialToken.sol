// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <0.7.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract TutorialToken is ERC20 {
    string public name = "EBT Balance";
    string public symbol = "EBT";
    uint256 public decimals = 2;
    uint256 public INITIAL_SUPPLY = 10000;

    constructor() public {
        _mint(msg.sender, INITIAL_SUPPLY);
    }
}
