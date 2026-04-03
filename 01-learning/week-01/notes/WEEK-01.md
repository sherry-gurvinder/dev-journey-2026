# Week 1: Advanced JavaScript

## Date Completed
March 2026

## What I Built
- Array method drills (map, filter, reduce)
- Data transformation exercises
- async/await fetch practice
- Set and groupBy exercises

---

## Concept 1: map

### What is it?
Transforms every item in an array and returns a NEW array.
Never modifies the original array.

### Syntax
```js
array.map((item) => doSomethingWith(item))
```

### Example
```js
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((num) => num * 2);
// Result: [2, 4, 6, 8, 10]

const users = [{name: 'Alice'}, {name: 'Bob'}];
const names = users.map((user) => user.name);
// Result: ['Alice', 'Bob']
```

### Key Rule
map always returns an array of the SAME LENGTH as the original.

---

## Concept 2: filter

### What is it?
Keeps only items where the condition is TRUE.
Returns a NEW array — possibly shorter than the original.

### Syntax
```js
array.filter((item) => condition)
```

### Example
```js
const numbers = [1, 2, 3, 4, 5, 6];
const evens = numbers.filter((num) => num % 2 === 0);
// Result: [2, 4, 6]

const users = [{name: 'Alice', active: true}, {name: 'Bob', active: false}];
const activeUsers = users.filter((user) => user.active);
// Result: [{name: 'Alice', active: true}]
```

### Key Rule
filter returns items where your condition returns true.
If nothing matches, returns empty array [].

---

## Concept 3: reduce

### What is it?
Collapses an entire array into ONE single value.
That value can be a number, string, object, or array.

### Syntax
```js
array.reduce((accumulator, currentItem) => {
    return accumulator + currentItem;
}, startingValue)
```

### Example
```js
// Sum all numbers
const numbers = [1, 2, 3, 4, 5];
const total = numbers.reduce((acc, num) => acc + num, 0);
// Result: 15

// Count occurrences
const fruits = ['apple', 'banana', 'apple', 'orange'];
const count = fruits.reduce((acc, fruit) => {
    acc[fruit] = (acc[fruit] || 0) + 1;
    return acc;
}, {});
// Result: { apple: 2, banana: 1, orange: 1 }
```

### Key Rule
The second argument (0, {}, []) is the STARTING VALUE of accumulator.
Always return the accumulator at the end of each iteration.

---

## Concept 4: Set

### What is it?
A collection that only allows UNIQUE values.
Duplicate values are automatically removed.

### Syntax
```js
new Set(array)           // create a Set from array
[...new Set(array)]      // convert back to array
new Set(array).size      // count unique values
```

### Example
```js
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana'];
const unique = [...new Set(fruits)];
// Result: ['apple', 'banana', 'orange']

const uniqueCount = new Set(fruits).size;
// Result: 3
```

---

## Concept 5: async/await

### What is it?
A way to write asynchronous code that looks synchronous.
async = this function will do something slow
await = pause here and wait for this to finish

### Why do we need it?
JavaScript is single-threaded. Without async/await,
slow operations (API calls, file reads) would freeze everything.

### Syntax
```js
const myFunction = async () => {
    const result = await slowOperation();
    console.log(result);
};
```

---

## Concept 6: fetch

### What is it?
The built-in browser function to make HTTP requests.
Used to get data from APIs or send data to servers.

### Pattern — always use this structure
```js
const getData = async () => {
    try {
        const response = await fetch('https://api.example.com/data');
        if (!response.ok) {
            throw new Error('Failed: ' + response.status);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error.message);
    }
};
```

### Key Rules
- Always check response.ok before calling response.json()
- Always await response.json() — it returns a Promise
- Always wrap in try/catch
- response.json() converts raw response to JavaScript object

---

## The Golden Rule of Array Methods
map, filter, and reduce NEVER modify the original array.
They always return a NEW array.
This is called IMMUTABILITY — a core principle in React.

---

## Common Mistakes
- Forgetting return inside reduce
- Not awaiting response.json()
- Missing try/catch around fetch
- Confusing map (transforms) with filter (removes)
- Using reduce when map or filter is simpler

---

## Cheat Sheet
```js
// map — transform every item
array.map((item) => item * 2)

// filter — keep matching items
array.filter((item) => item.age > 18)

// reduce — collapse to one value
array.reduce((acc, item) => acc + item, 0)

// Set — remove duplicates
[...new Set(array)]

// async/await fetch — GET
const response = await fetch(url);
if (!response.ok) throw new Error('Failed');
const data = await response.json();

// async/await fetch — POST
const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
});
```

---

## Interview Questions

Q: What is the difference between map and filter?
A: map transforms every item and returns same-length array.
   filter keeps only items matching a condition, returns shorter array.

Q: When would you use reduce?
A: When you need to collapse an array into a single value —
   summing numbers, counting occurrences, building an object from an array.

Q: What is immutability?
A: Not modifying original data. map/filter/reduce return new arrays
   instead of changing the original. React relies on this heavily.

Q: What does async/await do?
A: Lets you write asynchronous code that reads like synchronous code.
   async marks a function as asynchronous.
   await pauses execution until a Promise resolves.

Q: Why do we check response.ok?
A: fetch only throws an error for network failures, not HTTP errors
   like 404 or 500. response.ok is false for those — we throw manually.

---

## Next Week
Week 2: React Fundamentals
- Components, props, useState
- Controlled forms
- localStorage
