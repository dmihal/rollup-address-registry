const func = async function ({ deployments, getNamedAccounts }) {
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  const deployment = await deploy('AddressRegistry', {
    from: deployer,
  });
  console.log(`Deployed registry to ${deployment.address}`);
};

module.exports = func;
