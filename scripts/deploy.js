async function main() {
  const Bank = await ethers.getContractFactory("SimpleBank");
  const bank = await Bank.deploy();
  await bank.deployed();           // ← v5 way
  console.log("SimpleBank deployed to:", bank.address);  // ← .address not getAddress()
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});