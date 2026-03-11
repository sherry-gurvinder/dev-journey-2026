## Wednesday — Controlled Forms (Two-way binding)

**What I learned today:**
* Successfully built the core UI for the Guard Automator form.
* Mastered "Controlled Components" in React. 
* Learned that in React, we don't let HTML control the input boxes. Instead, we use `useState` to act as the single source of truth (Two-way data binding).
* Locked the input using `value={state}` and updated it using `onChange={(e) => setState(e.target.value)}`.
* Used template literals (backticks) to combine multiple state variables into one final report string.
* Successfully cleared the form after submission by resetting state to empty strings `""`.

**Code Snippet (My Work):**
```jsx
const [floorNumber, setfloorNumber] = useState("");
const [notes, setNotes] = useState("");

<input 
  value={floorNumber}
  placeholder='Floor Number'
  onChange={(e) => setfloorNumber(e.target.value)}
/>
