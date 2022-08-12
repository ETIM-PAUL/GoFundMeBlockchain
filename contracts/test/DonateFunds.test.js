import { expect } from "chai";

describe("DonateToACharity", function () {
  before(async function () {
    this.DonateToACharity = await ethers.getContractFactory("DonateToACharity");
  });

  beforeEach(async function () {
    this.donateToACharity = await this.DonateToACharity.deploy();
    await this.box.deployed();
  });

  //Test function
  it("send an an amount of tokens to a wallet address", async function () {
    await expect(() =>
      sender.sendEthToCharity({ to: someAddress, value: 1 })
    ).to.changeEtherBalance(sender, "-200");
  });

  it("allows to add items", () => {
    array.push(1);

    expect(array.push).to.have.been.called.with(1);
  });

  //
  it("should emit event with 4 args", async function (params) {
    await expect(DonateToACharity.sendEthToCharity())
      .to.emit(DonateToACharity, "NewDonor")
      .withArgs(address, string, uint, string);
  });
});
