const hardHat = require("hardhat");

//Returns the Ether Balanaceof a given Address
async function getBalance(address) {
  const balanceBigInt = await hardHat.waffle.provider.getBalance(address);
  return hardHat.ethers.utils.formatEther(balanceBigInt);
}

// Logs the Ether balances for a list of addresses.
async function printBalances(addresses) {
  let idx = 0;
  for (const address of addresses) {
    console.log(`Address ${idx} balance: `, await getBalance(address));
    idx++;
  }
}

// Logs the donors stored on-chain from charity donations.
async function printDonors(donors) {
  for (const donor of donors) {
    const payer = donor.donorName;
    const donorAddress = donor.donorAddress;
    const ethDonated = donor.amount;
    const charity = donor.charity;
    console.log(
      `${payer} with wallet address (${donorAddress}) donated: "${ethDonated}"ETH to "${charity}`
    );
  }
}

async function main() {
  // Get the example accounts we'll be working with.
  const [owner, donor, donor2, donor3] = await hardHat.ethers.getSigners();

  // We get the contract to deploy.
  const DonateToACharity = await hardHat.ethers.getContractFactory(
    "DonateToACharity"
  );
  const donateToACharity = await DonateToACharity.deploy();

  // Deploy the contract.
  await donateToACharity.deployed();
  console.log("DonateToACharity deployed to:", donateToACharity.address);

  // Check balances before the donation .
  const addresses = [owner.address, donor.address, donateToACharity.address];
  console.log("== start ==");
  await printBalances(addresses);

  // Donate to a cause.
  const donation = { value: hardHat.ethers.utils.parseEther("0.2") };
  await donateToACharity
    .connect(donor)
    .sendEthToCharity("Joe", "Helping Orphans", donation);

  // Check balances after the donation .
  console.log("== donated tokens ==");
  await printBalances(addresses);

  // Check out the donors.
  console.log("== donors ==");
  const donors = await donateToACharity.getDonors();
  printDonors(donors);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
