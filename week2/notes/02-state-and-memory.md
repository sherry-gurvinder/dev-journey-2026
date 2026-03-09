# 02: Component State (Memory)

**Date:** March 9, 2026
**Concept:** Giving React components the ability to remember and update data.

## 1. Props vs. State
- **Props:** Read-only data passed down from a Parent (`App.jsx`). A Child component cannot change its own Props.
- **State:** A component's internal, private memory. When State changes, React instantly re-renders *only* that specific component to show the new data.

## 2. The `useState` Hook
To use state, we must import the `useState` tool from React. We use Array Destructuring (from our ES6 training) to unpack it into two pieces:
1. The current value.
2. The exact function allowed to update that value.

```jsx
import { useState } from "react";

const ProfileCard = () => {
  // [currentValue, updaterFunction] = useState(initialValue)
  const [commendations, setCommendations] = useState(0);

  const handleAward = () => {
    setCommendations(commendations + 1);
  };

  return (
    <button onClick={handleAward}>
      Commendations: {commendations}
    </button>
  );
};