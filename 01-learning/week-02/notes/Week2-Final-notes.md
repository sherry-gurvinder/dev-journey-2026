# Week 2: React Fundamentals

## Date Completed
March 2026

## What I Built
- React components with props
- useState counter and toggle
- Controlled login form with validation
- localStorage save/load
- Guard dashboard form draft

---

## Concept 1: Components

### What is it?
A component is a JavaScript function that returns JSX.
Everything in React is a component.
Components are like Lego blocks — you compose them to build UIs.

### Syntax
```jsx
function MyComponent({ propName }) {
    return <div>{propName}</div>;
}

// Arrow function style
const MyComponent = ({ propName }) => {
    return <div>{propName}</div>;
};
```

### Example
```jsx
function UserCard({ name, email }) {
    return (
        <div>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    );
}

// Use it like an HTML tag
function App() {
    return (
        <div>
            <UserCard name="Alice" email="alice@example.com" />
            <UserCard name="Bob" email="bob@example.com" />
        </div>
    );
}
```

### Rules of Components
1. Name MUST start with capital letter (UserCard not usercard)
2. Must return ONE root element — wrap in <div> or <>fragment</>
3. Props flow DOWN only — parent to child

---

## Concept 2: Props

### What is it?
Props are how you pass data from parent to child component.
Like HTML attributes but for React components.

### Syntax
```jsx
// Pass props
<UserCard name="Alice" age={25} isActive={true} />

// Receive props
function UserCard({ name, age, isActive }) {
    return <div>{name} is {age}</div>;
}
```

### Key Rules
- Strings use quotes: name="Alice"
- Everything else uses {}: age={25} isActive={true}
- Props are READ ONLY — never modify them inside the component

---

## Concept 3: useState

### What is it?
useState gives a component memory.
Without it, every re-render starts fresh.
With it, React remembers the value between renders.

### Syntax
```jsx
import { useState } from 'react';

const [value, setValue] = useState(initialValue);
```

### Example
```jsx
function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Add 1</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    );
}
```

### The Golden Rule
NEVER modify state directly:
count = count + 1  ❌ does nothing

ALWAYS use the setter function:
setCount(count + 1)  ✅ triggers re-render

---

## Concept 4: Controlled Forms

### What is it?
React state is the single source of truth for form inputs.
Every keystroke updates state.
Input always shows what is in state.

### Pattern
```jsx
function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();  // Stop page refresh!

        if (!email.includes('@')) {
            setError('Please enter a valid email');
            return;
        }
        if (password.length < 6) {
            setError('Password must be at least 6 characters');
            return;
        }

        console.log('Submitted:', { email, password });
    };

    return (
        <form onSubmit={handleSubmit}>
            {error && <p style={{color: 'red'}}>{error}</p>}
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Login</button>
        </form>
    );
}
```

### Key Rules
- value={stateVar} — makes it controlled
- onChange={(e) => setState(e.target.value)} — updates state on every keystroke
- e.preventDefault() — stops form from refreshing the page
- Always validate before submitting

---

## Concept 5: localStorage

### What is it?
Saves data in the user's browser.
Survives page refreshes and browser restarts.
Stores only strings — use JSON.stringify/parse for objects.

### Syntax
```js
// Save
localStorage.setItem('key', 'value');
localStorage.setItem('user', JSON.stringify({ name: 'Alice' }));

// Read
const value = localStorage.getItem('key');
const user = JSON.parse(localStorage.getItem('user'));

// Delete
localStorage.removeItem('key');

// Clear everything
localStorage.clear();
```

### Use with useState
```jsx
// Load from localStorage on first render
const [name, setName] = useState(() => {
    return localStorage.getItem('name') || '';
});

// Save whenever name changes
useEffect(() => {
    localStorage.setItem('name', name);
}, [name]);
```

---

## Common Mistakes
- Component name starts with lowercase ❌
- Modifying state directly (count = count + 1) ❌
- Forgetting e.preventDefault() on form submit ❌
- Using href instead of onClick for buttons ❌
- Forgetting value= on controlled inputs ❌
- Not parsing JSON from localStorage ❌

---

## Cheat Sheet
```jsx
// Component
const MyComponent = ({ prop }) => <div>{prop}</div>;

// State
const [value, setValue] = useState(initialValue);

// Controlled input
<input
    value={stateVar}
    onChange={(e) => setStateVar(e.target.value)}
/>

// Prevent form reload
const handleSubmit = (e) => {
    e.preventDefault();
    // your logic
};

// localStorage save
localStorage.setItem('key', JSON.stringify(data));

// localStorage read
JSON.parse(localStorage.getItem('key'));
```

---

## Interview Questions

Q: What is a controlled component?
A: A form input where React state is the single source of truth.
   The value prop binds input to state.
   onChange updates state on every keystroke.

Q: What is the difference between props and state?
A: Props are passed from parent to child — read only.
   State is internal to a component — can be changed with setter.

Q: Why do we call e.preventDefault() on form submit?
A: HTML forms reload the page by default when submitted.
   preventDefault stops that reload so React can handle it.

Q: What is useState?
A: A React hook that adds memory to a component.
   Returns current value and a setter function.
   Calling the setter triggers a re-render.

Q: What are the limitations of localStorage?
A: Stores strings only (need JSON.stringify/parse for objects).
   Limited to ~5MB. Not secure for sensitive data.
   Only accessible in the browser — not during server-side rendering.

---

## Next Week
Week 3: APIs and useEffect
- fetch with useEffect
- Loading, error, empty states
- Service layer (api.js)
- POST requests
