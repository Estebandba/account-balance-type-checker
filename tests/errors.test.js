const {
  InvalidArgumentError,
  MinMonthsRegisteredError,
  InvalidDataStructureError,
} = require("../src/errors");

describe("Check Custom Errors", () => {
  it('should check that it throws the correct error "InvalidArgumentError"', () => {
    const error = new InvalidArgumentError();
    expect(error.message).toEqual("accountBalanceHistory must be an array");
  });
  it('should check that it throws the correct error "MinMonthsRegisteredError"', () => {
    const error = new MinMonthsRegisteredError();
    expect(error.message).toEqual(
      "accountBalanceHistory must have at least 3 months registered"
    );
  });
  it('should check that it throws the correct error "InvalidDataStructureError"', () => {
    const error = new InvalidDataStructureError();
    expect(error.message).toEqual(
      "accountBalanceHistory data structure is not valid"
    );
  });
});
