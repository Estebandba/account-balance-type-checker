class InvalidArgumentError extends Error {
  constructor(message) {
    super((message = "accountBalanceHistory must be an array"));
    this.message = message;
  }
}
class MinMonthsRegisteredError extends Error {
  constructor(message) {
    super(
      (message = "accountBalanceHistory must have at least 3 months registered")
    );
    this.message = message;
  }
}
class InvalidDataStructureError extends Error {
  constructor(message) {
    super((message = "accountBalanceHistory data structure is not valid"));
    this.message = message;
  }
}
module.exports = {
  InvalidArgumentError,
  MinMonthsRegisteredError,
  InvalidDataStructureError,
};
