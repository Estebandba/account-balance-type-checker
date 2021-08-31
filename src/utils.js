const isSameAmount = (balanceDifferences) => {
  return balanceDifferences.every((amount, _, arr) => amount === arr[0]);
};
const hasValidData = (data) => {

  const isDataStructureValid =  data &&
  data.hasOwnProperty("account") &&
  data.account.hasOwnProperty("balance") &&
  data.account.balance.hasOwnProperty("amount") && 
  !isNaN(data.account.balance.amount);

  return isDataStructureValid;
};
module.exports = { isSameAmount, hasValidData };
