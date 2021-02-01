# Koodoo Software Engineer Technical Assessment 👾

---

## Introduction 🎬

First of all, congrats 🥳. We've enjoyed our initial chat and are pleased that you've decided to consider joining the Koodoo engineering team!

As a way to introduce you to our way of building software we've put together a (small) technical challenge for you to complete before the next stage of the process.

## Assumptions and requirements ✅

As a full stack engineer 🥞 , you'll hopefully be comfortable with:

* Developing sever side applications, with node.js in particular. E.g. RESTful APIs, messaging services, CRUD applications etc ⚛

* Developing front end applications using modern frameworks like Svelte, React or Angular 🖼

* General solid programming fundamentals 💪

In order to complete this assignment all you should need is any machine that can run node.js (v12+ ideally), an editor of your choice, and some coding skills!

## The problem 💻

**Background**:

Consider the following data structure.

```
const accountBalanceHistory = [
  {
    monthNumber: 0, // current month
    account: {
      balance: { amount: 0 },
    },
  },
  {
    monthNumber: 1, // last month
    account: {
      balance: { amount: 100 },
    },
  },
  {
    monthNumber: 2, // two months ago
    account: {
      balance: { amount: 200 },
    },
  }
]
```

Account balance history is an array that denotes a monthly track record of the balance in someone's account (or simply put how much money they had left that month!)

Each top level object within the array denotes the running balance value within that particular month.

E.g. in our example above, I can see that someone
started of with a balance of 200 2 months ago, this decreased to 100 the following month, and again to 0 in the final and current month.

### Your Task

Write a function (JavaScript) such that given a accountBalanceHistory array as an argument, it will categorise the array based on the way that the balance value is changing month by month.

Here's how this might look:

```
const accountTypeChecker = (accountBalanceHistory) => {
  /***
  Your goal is to write a function that determines from someone's ${accountBalanceHistory} 🧾 (see the array above for an example)
  whether this array is of type A (variable) or type B (fixed).

  Type 🅰 denotes a balance history where the balance amount decreases by varying amounts each month.

  Type 🅱 is one where the balance amount changes by the same amount each month.
  ***/

  // Write your logic here  - No pressure 😁 //
  let result;

  return result ? "A" : "B";
};
```

In other words, write a function that returns B when the balance amount goes down by the same value each month or A when it varies month by month.

In our example above, the account balance was originally 200 and decreased to 100, and then decreased again by the **same** amount (100 -> 0). In this case the algorithm should return the string "B" since the decrease was fixed to a value of 100 each month.

### Things to consider in your solution 🤔

- Does it solve the basic case?
- What other cases might need to be considered?
- What unit tests might you write for this type of function?

We're not looking for a 100% full proof solution (which might not exist anyway depending on the use case).

You should provide your solution by submitting your code in the form of a GitHub repository. 🤝

## Questions ❓

Email us :)

Look forward to speaking with you soon!