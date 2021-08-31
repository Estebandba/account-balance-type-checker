const { isSameAmount, hasValidData } = require("./utils");
const {
  InvalidArgumentError,
  MinMonthsRegisteredError,
  InvalidDataStructureError,
} = require("./errors");

const accountTypeChecker = (accountBalanceHistory) => {
  let result = false;
  let amounts = [];
  let balanceDifferences = [];
  const MONTHS = { ONE: 1, TWO: 2, THREE: 3 };

  const isArgumentAnArray = Array.isArray(accountBalanceHistory);
  const hasMinMonthsRegistered = accountBalanceHistory.length < MONTHS.THREE;

  if (!isArgumentAnArray) {
    throw new InvalidArgumentError();
  }
  if (hasMinMonthsRegistered) {
    throw new MinMonthsRegisteredError();
  }

  for (
    let accountIndex = 0;
    accountIndex < accountBalanceHistory.length;
    accountIndex++
  ) {
    if (!hasValidData(accountBalanceHistory[accountIndex])) {
      throw new InvalidDataStructureError();
    }
    // Add current balance amount to the amounts array
    amounts.push(accountBalanceHistory[accountIndex].account.balance.amount);

    const hasArrayMoreThanOneMonth = amounts.length > MONTHS.ONE;

    if (hasArrayMoreThanOneMonth) {
      const twoMonthsAmountDifference = Math.abs(
        Math.round(amounts[accountIndex - 1] - amounts[accountIndex])
      );
      balanceDifferences.push(twoMonthsAmountDifference);
    }
    const hasArrayThreeMonthsOrMore = accountIndex >= MONTHS.TWO;

    if (hasArrayThreeMonthsOrMore) {
      if (!isSameAmount(balanceDifferences)) {
        // if the balance amount changes then return true ("A") and break the loop
        result = true;
        break;
      }
    }
  }

  return result ? "A" : "B";
};

module.exports = accountTypeChecker;
