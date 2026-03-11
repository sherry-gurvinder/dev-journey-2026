# 📝 Day 3: Multi-State Forms & UI Rendering

## 🧠 Core Concepts Mastered

| Concept | Description | Syntax Example |
| :--- | :--- | :--- |
| **Multiple States** | Using several independent `useState` hooks in a single component to track different data points. | `const [floor, setFloor] = useState("");` |
| **Controlled Components** | Locking an HTML `<input>` completely to a React state variable. | `<input value={floor} onChange={...} />` |
| **Conditional Rendering** | Using the Logical AND (`&&`) to hide or show UI elements based on state data. | `{finalReport && <div>{finalReport}</div>}` |
| **Template Literals** | ES6 JavaScript feature for injecting variables into strings without using the `+` operator. | `` `Location: ${floor}` `` |

## ⚙️ Architecture: The Two-Way Data Flow

1. **Listen:** The `onChange` event fires every time a key is pressed.
2. **Update:** The inline arrow function `(e) => setNotes(e.target.value)` updates the state.
3. **Lock:** The `value={notes}` attribute forces the input box to exactly match the state memory.
4. **Action:** The `onClick` event triggers a handler function to process the data and clear the inputs.

## 💻 Code Reference: The Multi-Input Form

```jsx
import { useState } from 'react';

const IncidentBox = () => {
  // 1. Independent State Variables
  const [notes, setNotes] = useState("");
  const [floorNumber, setFloorNumber] = useState("");
  const [finalReport, setFinalReport] = useState("");

  const handleGenerate = () => {
    // 2. Data Assembly using Template Literals
    setFinalReport(`Location: ${floorNumber} | Details: ${notes}`);
    
    // 3. State Reset (Clears the controlled inputs)
    setNotes("");
    setFloorNumber("");
  }

  return (
    <div>
      {/* 4. Controlled Inputs */}
      <input 
        value={floorNumber} 
        onChange={(e) => setFloorNumber(e.target.value)} 
      />
      <textarea 
        value={notes} 
        onChange={(e) => setNotes(e.target.value)} 
      ></textarea>
      
      <button onClick={handleGenerate}>Submit</button>

      {/* 5. Conditional Rendering */}
      {finalReport && (
        <div>
          <h3>Official Log:</h3>
          <p>{finalReport}</p>
        </div>
      )}
    </div>
  );
}
export default IncidentBox;