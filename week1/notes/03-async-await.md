# 04: Async/Await Deep Dive & Week 1 Projects

**Date:** March 9, 2026
**Goal:** Master asynchronous data fetching and combine it with array manipulation.

## 1. The Anatomy of Time in JavaScript
JavaScript is single-threaded (one cashier). If a database takes 2 seconds to reply, a synchronous app freezes completely. To fix this, we use the "Receipt" method:
- **`Promise`:** A built-in blueprint for an IOU receipt. 
- **`new Promise`:** The keyword `new` tells JavaScript to physically allocate memory and create a unique receipt from that blueprint right now. Without `new`, it crashes.
- **`resolve`:** The moment the data is finally ready to be handed over to the application.

## 2. The Remote Control (`async` / `await`)
- **`async`:** Placed in front of a function to warn JavaScript: "Time travel happens inside here."
- **`await`:** Placed in front of the slow task. It pauses *only that specific function* while waiting for the `resolve`, allowing the rest of the app to keep running.

---

## 3. Project 1: Financial Data Processor
**Objective:** Fetch a simulated database payload, isolate deposits, and sum their values.

```javascript
const fetchTransactions = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, type: "deposit", amount: 100 },
        { id: 2, type: "withdrawal", amount: 50 },
        { id: 3, type: "deposit", amount: 200 }
      ]);
    }, 1500);
  });
};

const processTransactions = async () => {
  const accountDetails = await fetchTransactions();
  
  const accountWithDeposit = accountDetails.filter((currentItem) => {
    return currentItem.type === "deposit";
  });
  
  const accountTotal = accountWithDeposit.reduce((sum, currentItem) => {
    return sum + currentItem.amount;
  }, 0); 
  // NOTE: The `, 0` is required. Without it, JS tries to add a Number to an Object, resulting in "[object Object]"
  
  console.log("Total Of Deposit Account:", accountTotal);
};

processTransactions();