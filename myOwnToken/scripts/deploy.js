require("@nomiclabs/hardhat-ethers");

async function main() {
  console.log("kwai");
  const Token = await ethers.getContractFactory("Token");
  console.log("Deploying Token...");
  const token = await Token.deploy();

  await token.deployed();
  console.log("The Rich deployed to:", token.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
