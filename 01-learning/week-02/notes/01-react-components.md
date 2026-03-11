# 01: React Components, Props, and Mapping

**Date:** March 9, 2026
**Concept:** Moving from static HTML to dynamic, data-driven UI blocks.

## 1. The Component Architecture
A React Component is just a JavaScript function that returns UI (JSX). We build modular "Lego blocks" instead of massive HTML files. Component file names always start with a Capital Letter.

## 2. Props (Passing Data)
Props are custom HTML attributes used to pass data from a Parent component down to a Child component. 
- We use **Object Destructuring** in the Child's parentheses to instantly unpack the data.
- **Default Parameters:** We can set fallback data right in the destructuring (e.g., `name = "Classified"`) to prevent the app from breaking if data is missing.

## 3. The `.map()` Method (The Assembly Line)
We never hardcode repetitive UI. We take an Array of Objects from a database and use `.map()` to automatically generate a component for every item in the array.

```jsx
// Example of mapping an array to components:
{operativeData.map((operative) => {
  return (
    <ProfileCard 
      key={operative.id} // React requires a unique key for mapped lists
      name={operative.name} 
      role={operative.role} 
    />
  );
})}