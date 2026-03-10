// ==========================================
// 1. ARRAY DESTRUCTURING
// ==========================================
const accountDetails = [
  { name: "gurvinder", age: 23 },
  { name: "sherry", age: 32 },
  { name: "raman", age: 35 }
];

console.log("Account Details", accountDetails);

// Unpacking arrays requires brackets [], not curly braces {}
const [person1, person2, person3] = accountDetails;


// ==========================================
// 2. ARROW FUNCTIONS
// ==========================================
// Old way (Normal function):
function getAccountDetails() {
}

// Modern way (Arrow function removes 'function' keyword):
const getAccountDetailsArrow = () => {
}


// ==========================================
// 3. ARRAY METHODS
// ==========================================

// A. map() - A modern for loop. Iterates each item in the array and returns a NEW array.
const agesOnly = accountDetails.map((currentItem) => {
  return currentItem.age; // Returns: [23, 32, 35]
});

// B. reduce() - The Snowball. Stores the accumulating value in the initialValue variable.
// Notice it is arrayName.reduce(), not reduce.arrayName()
const totalAge = accountDetails.reduce((initialValue, currentItem) => {
  return initialValue + currentItem.age; // 0 + 23 + 32 + 35 = 90
}, 0); // 0 is the starting size of the snowball

// C. filter() - The Bouncer. Creates a new array based on a true/false condition.
const over30Users = accountDetails.filter((currentItem) => {
  return currentItem.age > 30; // Only keeps objects where this is true
});


// ==========================================
// 4. PROMISE, ASYNC, AWAIT
// ==========================================
// Promise: The function that will return the response.
// Async: The keyword to define a function that handles promises.
// Await: Tells the JS engine to pause and wait for the time/data to finish.

// The Promise (Capital 'P' in Promise, lowercase 'o' in setTimeout)
const checkingAccountData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(accountDetails);
    }, 1000);
  });
};

// The Async Function (Equals sign placement fixed)
const checkAgeOver30 = async () => {
  // Await the data (Equals sign added to catch the result)
  const accountData = await checkingAccountData();
  
  // Filter the data and save it to a variable so we don't lose it
  const filteredData = accountData.filter((currentItem) => {
    return currentItem.age > 30;
  });

  console.log("Users over 30:", filteredData);
};

// Execute the function
checkAgeOver30();


/*🏭 The Factory vs. The Delivery Box
Think of ProfileCard as a physical factory building.
Think of the data (name="SG") as a delivery box being dropped off at the front door of that factory.

If you write ProfileCard.name, you are asking the factory building itself what its name is. JavaScript will actually answer you! It will say: "My name is ProfileCard." It completely ignores the data box.

If you want the data inside the delivery box, you have to look at the package that was dropped off at the door. In React, that delivery box is always called props.

📦 How the Code Actually Looks
1. The "Props Box" Way (Valid, but old)
If we don't unpack the box at the door, we have to name the box props inside the parentheses. Then we can look inside it using props.name.
*/
//JavaScript
const ProfileCard = (props) => {
  return <h2>Operative: {props.name}</h2>;
}
/*2. The Enterprise Way (What we do)
Instead of carrying the whole box inside, we use Object Destructuring {} to rip the box open right at the front door and just grab the name item.*/

JavaScript
const ProfileCard = ({ name }) => {
  return <h2>Operative: {name}</h2>;
}
/*3. The Crashing Way (What you asked)

JavaScript*/
const ProfileCard = () => {
  // This will NOT give you "SG". 
  // It will either crash or just print "ProfileCard".
  return <h2>Operative: {ProfileCard.name}</h2>; 
}
/*
🧠 The Bottom Line
ProfileCard is the function. props is the argument (the data) handed into the function. You can never get the data by asking the function's name.*/