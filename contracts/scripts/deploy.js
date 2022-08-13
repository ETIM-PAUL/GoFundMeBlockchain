const hardHat = require("hardhat");

async function main() {
  // We get the contract to deploy.
  const DonateToACharity = await hardHat.ethers.getContractFactory(
    "DonateToACharity"
  );
  const donateToACharity = await DonateToACharity.deploy();

  // Deploy the contract.
  await donateToACharity.deployed();
  console.log("DonateToACharity deployed to:", donateToACharity.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
