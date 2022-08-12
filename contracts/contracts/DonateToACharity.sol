//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.9;

// import "hardhat/console.sol";

contract DonateToACharity {
    //Event to emit
    event NewDonor(
        address indexed donor,
        string donorName,
        uint256 amount,
        string charity
    );

    //Memo Struct.
    struct DonorInfo {
        address donorAddress;
        string donorName;
        uint256 amount;
        string charity;
    }

    DonorInfo[] donors;

    //address of donor
    address payable owner;

    //Deploys contract
    constructor() {
        owner = payable(msg.sender);
    }

    /*
     * @dev Donate an amount of ETH tokens to an Organization, Person or Cause
     */
    function sendEthToCharity(string memory _donorName, string memory _charity)
        public
        payable
    {
        require(msg.value > 0, "Insufficient funds, Please fund account");

        //Add donor info to storage
        donors.push(DonorInfo(msg.sender, _donorName, msg.value, _charity));

        //Emit a log event when a new donation is created
        emit NewDonor(msg.sender, _donorName, msg.value, _charity);
    }

    /*
     * @dev Retrieve all donations submitted to Organizations, Persons or Causes
     */
    function getDonors() public view returns (DonorInfo[] memory) {
        return donors;
    }
}
