# 01: Destructuring (Objects & Arrays)

**Date:** March 4, 2026
**Goal:** Unpack values from arrays or properties from objects into distinct variables without mutating the original data structure.

## 1. Object Destructuring
- **The "Why":** Essential for clean code, especially when passing data payloads or handling React `props`. 
- **Standard Syntax:** `const { alias, role } = developerProfile;`
- **Mid-Level Tip (Renaming):** If a variable name clashes with something already in your file, rename it on the fly: 
  `const { role: jobTitle } = developerProfile;` // Now it's called jobTitle.

## 2. Array Destructuring
- **The "Why":** Extracts items based strictly on their index position (0, 1, 2...). 
- **Standard Syntax:** `const [primaryLanguage, secondaryLanguage] = techStack;`
- **Mid-Level Tip (The Rest Operator):** Grab the first item, and bundle the remaining items into a new array:
  `const [frontEnd, ...backEndStack] = fullStack;`