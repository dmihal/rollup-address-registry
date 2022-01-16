//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IAddressRegistry {
    function nextId() external view returns (uint256);

    function getId(address addr) external returns (uint256 id);

    function peekId(address addr) external view returns (uint256 id);

    function getAddress(uint256 id) external view returns (address addr);
}
