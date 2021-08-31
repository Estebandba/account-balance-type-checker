const accountTypeChecker = require("../src/accountBalance");
const {
  InvalidArgumentError,
  MinMonthsRegisteredError,
  InvalidDataStructureError,
} = require("../src/errors");

describe("Check the balance history of the accounts", () => {
  it("should return B when the balance amount changes by the same amount", () => {
    const accountBalanceHistory = [
      {
        monthNumber: 0,
        account: {
          balance: { amount: 0 },
        },
      },
      {
        monthNumber: 1,
        account: {
          balance: { amount: 100 },
        },
      },
      {
        monthNumber: 2,
        account: {
          balance: { amount: 200 },
        },
      },
    ];

    expect(accountTypeChecker(accountBalanceHistory)).toBe("B");
  });
  it("should return B when the balance amount changes by the same decimal amount", () => {
    const accountBalanceHistory = [
      {
        monthNumber: 0,
        account: {
          balance: { amount: 50.2 },
        },
      },
      {
        monthNumber: 1,
        account: {
          balance: { amount: 150.20 },
        },
      },
      {
        monthNumber: 2,
        account: {
          balance: { amount: 250.20 },
        },
      },
    ];

    expect(accountTypeChecker(accountBalanceHistory)).toBe("B");
  });
  it("should return B when the balance amount changes by the same amount even if negative", () => {
    const accountBalanceHistory = [
      {
        monthNumber: 0,
        account: {
          balance: { amount: 0 },
        },
      },
      {
        monthNumber: 1,
        account: {
          balance: { amount: -100 },
        },
      },
      {
        monthNumber: 2,
        account: {
          balance: { amount: -200 },
        },
      },
    ];

    expect(accountTypeChecker(accountBalanceHistory)).toBe("B");
  });
  it("should return A when the balance amount changes by different amounts", () => {
    const accountBalanceHistory = [
      {
        monthNumber: 0,
        account: {
          balance: { amount: 0 },
        },
      },
      {
        monthNumber: 1,
        account: {
          balance: { amount: 300 },
        },
      },
      {
        monthNumber: 2,
        account: {
          balance: { amount: 200 },
        },
      },
      {
        monthNumber: 2,
        account: {
          balance: { amount: 50 },
        },
      },
    ];

    expect(accountTypeChecker(accountBalanceHistory)).toBe("A");
  });
  it("should return A when the balance amount changes by different amounts even if negative", () => {
    const accountBalanceHistory = [
      {
        monthNumber: 0,
        account: {
          balance: { amount: 0 },
        },
      },
      {
        monthNumber: 1,
        account: {
          balance: { amount: -300 },
        },
      },
      {
        monthNumber: 2,
        account: {
          balance: { amount: -200 },
        },
      },
      {
        monthNumber: 2,
        account: {
          balance: { amount: -50 },
        },
      },
    ];

    expect(accountTypeChecker(accountBalanceHistory)).toBe("A");
  });
  it("should return A when the balance amount changes by different decimal amounts", () => {
    const accountBalanceHistory = [
      {
        monthNumber: 0,
        account: {
          balance: { amount: 0 },
        },
      },
      {
        monthNumber: 1,
        account: {
          balance: { amount: 300.20 },
        },
      },
      {
        monthNumber: 2,
        account: {
          balance: { amount: 200.30 },
        },
      },
      {
        monthNumber: 2,
        account: {
          balance: { amount: 50 },
        },
      },
    ];

    expect(accountTypeChecker(accountBalanceHistory)).toBe("A");
  });
  it("should return B when the balance amount does not change at all", () => {
    const accountBalanceHistory = [
      {
        monthNumber: 0,
        account: {
          balance: { amount: 200 },
        },
      },
      {
        monthNumber: 1,
        account: {
          balance: { amount: 200 },
        },
      },
      {
        monthNumber: 2,
        account: {
          balance: { amount: 200 },
        },
      },
      {
        monthNumber: 2,
        account: {
          balance: { amount: 200 },
        },
      },
    ];

    expect(accountTypeChecker(accountBalanceHistory)).toBe("B");
  });
  it("should throw an error when the accountBalanceHistory is not an array", () => {
    const accountBalanceHistory = {};
    expect(() => {
      accountTypeChecker(accountBalanceHistory);
    }).toThrowError(new InvalidArgumentError());
  });
  it("should throw an error when the accountBalanceHistory has less than 3 months registered", () => {
    const accountBalanceHistory = [
      {
        monthNumber: 0,
        account: {
          balance: { amount: 200 },
        },
      },
      {
        monthNumber: 1,
        account: {
          balance: { amount: 200 },
        },
      },
    ];
    expect(() => {
      accountTypeChecker(accountBalanceHistory);
    }).toThrowError(new MinMonthsRegisteredError());
  });
  it("should throw an error when the accountBalanceHistory has an invalid data structure", () => {
    const accountBalanceHistory = [
      {
        monthNumber: 0,
        account: {
          balance: { amount: 0 },
        },
      },
      {
        monthNumber: 1,
        account: {
          balance: { bank: 100 },
        },
      },
      {
        monthNumber: 1,
        account: {
          balance: { amount: 200 },
        },
      },
    ];
    expect(() => {
      accountTypeChecker(accountBalanceHistory);
    }).toThrowError(new InvalidDataStructureError());
  });
  it("should throw an error when the accountBalanceHistory has an amount that is not a number", () => {
    const accountBalanceHistory = [
      {
        monthNumber: 0,
        account: {
          balance: { amount: 0 },
        },
      },
      {
        monthNumber: 1,
        account: {
          balance: { bank: 100 },
        },
      },
      {
        monthNumber: 1,
        account: {
          balance: { amount: 'just a test' },
        },
      },
    ];
    expect(() => {
      accountTypeChecker(accountBalanceHistory);
    }).toThrowError(new InvalidDataStructureError());
  });
});
