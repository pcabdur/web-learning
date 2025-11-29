const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("SimpleBank - REAL ETH VERSION", function () {
  it("Should deposit and withdraw real ETH correctly", async function () {
    const [owner, user1] = await ethers.getSigners();

    const Bank = await ethers.getContractFactory("SimpleBank");
    const bank = await Bank.deploy();
    await bank.deployed();

    // Deposit 1 ETH (real ETH!)
    await user1.sendTransaction({
      to: bank.address,
      value: ethers.utils.parseEther("1.0")
    });

    // Or use the deposit() function
    await bank.connect(user1).deposit({ value: ethers.utils.parseEther("2.0") });

    // Check balance
    const balance = await bank.getBalance(user1.address);
    expect(balance).to.equal(ethers.utils.parseEther("3.0"));

    // Withdraw 1.5 ETH
    await bank.connect(user1).withdraw(ethers.utils.parseEther("1.5"));

    // Final balance should be 1.5 ETH
    const finalBalance = await bank.getBalance(user1.address);
    expect(finalBalance).to.equal(ethers.utils.parseEther("1.5"));
  });
});