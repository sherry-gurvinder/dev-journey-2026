# Week 3: Connecting to the Real World (APIs)

## Date Completed
March 31, 2026

## What I Built
- UserList component with fetch, loading/error/empty states, retry button
- Search filter using derived state (filteredUsers)
- CreatePost component with POST request
- Professional service layer (services/api.js)
- Week 3 Saturday Mini-Project: API Dashboard

---

## Concept 1: useEffect — The Cage for Side Effects

### What is it?
useEffect is where you put code that reaches OUTSIDE React.
Examples: API calls, timers, event listeners, localStorage.

### Why do we need it?
Without useEffect, your fetch runs on EVERY render = infinite loop.
useEffect controls WHEN the code runs.

### Syntax
```js
useEffect(() => {
    // code runs here
}, []);  // empty [] = run once when component mounts
```

### The Waiter Analogy
- fetch = the waiter who goes to the kitchen (server)
- useEffect = the cage that controls when the waiter goes out
- Empty [] = waiter goes out once when restaurant opens

### Dependency Array Rules
- [] = run once on mount only
- [id] = run every time id changes
- no array = run on every render (dangerous!)

---

## Concept 2: The Three UI States

Every component that loads data MUST handle all three states.

### State 1 — Loading
```jsx
if (isLoading) return <p>Loading...</p>;
```

### State 2 — Error
```jsx
if (error) return (
    <div>
        <p style={{color: 'red'}}>Error: {error}</p>
        <button onClick={fetchData}>Retry</button>
    </div>
);
```

### State 3 — Empty
```jsx
if (data.length === 0) return <p>No data found.</p>;
```

### Full Pattern
```jsx
const [data, setData] = useState([]);
const [isLoading, setIsLoading] = useState(true);
const [error, setError] = useState(null);

const fetchData = async () => {
    setIsLoading(true);
    try {
        const result = await getData();
        setData(result);
    } catch (err) {
        setError(err.message);
    } finally {
        setIsLoading(false);
    }
};

useEffect(() => {
    fetchData();
}, []);
```

---

## Concept 3: fetch with async/await

### GET Request
```js
const response = await fetch('https://api.example.com/users');
if (!response.ok) throw new Error('Failed: ' + response.status);
const data = await response.json();
```

### POST Request
```js
const response = await fetch('https://api.example.com/posts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title: 'Hello', body: 'World' }),
});
if (!response.ok) throw new Error('Failed to create');
const data = await response.json();
```

### Key Rules
- Always check response.ok before calling response.json()
- Always await response.json() — it's also async
- Always wrap in try/catch
- Use finally to always set loading to false

---

## Concept 4: Service Layer (api.js)

### What is it?
A separate file that holds ALL fetch logic.
Components NEVER contain fetch() calls directly.

### Why?
- If URL changes, update ONE file not 10 components
- Components are cleaner and easier to read
- Reusable across multiple components
- Easier to test

### Structure
```js
// src/services/api.js
const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const getUsers = async () => {
    const response = await fetch(`${BASE_URL}/users`);
    if (!response.ok) throw new Error('Failed to fetch users');
    return response.json();
};

export const getUserById = async (id) => {
    const response = await fetch(`${BASE_URL}/users/${id}`);
    if (!response.ok) throw new Error('Failed to fetch user');
    return response.json();
};

export const createPost = async (data) => {
    const response = await fetch(`${BASE_URL}/posts`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error('Failed to create post');
    return response.json();
};
```

### Using api.js in a component
```jsx
import { getUsers } from '../services/api';

useEffect(() => {
    getUsers()
        .then(data => setUsers(data))
        .catch(err => setError(err.message))
        .finally(() => setIsLoading(false));
}, []);
```

---

## Concept 5: Search Filter — Derived State

### The Key Insight
Do NOT create a separate useState for filtered list.
Derive it from existing state on every render.

### Two states needed
```jsx
const [users, setUsers] = useState([]);      // raw API data
const [searchQuery, setSearchQuery] = useState('');  // search input
```

### Derived variable (no useState)
```jsx
const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
);
```

### In JSX
```jsx
<input
    type="text"
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
    placeholder="Search..."
/>

{filteredUsers.map((user) => (
    <div key={user.id}>{user.name}</div>
))}

{filteredUsers.length === 0 && <p>No users match your search.</p>}
```

### Why .toLowerCase() on both sides?
"JOHN".includes("john") = false
"john".includes("john") = true
Always convert both to lowercase for case-insensitive search.

---

## Common Mistakes Made

- Missing await on response.json()
- useState([]) vs useState({}) — arrays for lists, null for single objects
- Calling fetch directly in component instead of api.js
- Missing finally block — loading never turns off on error
- Using users.map instead of filteredUsers.map
- Not setting isLoading(true) at the start of fetch function
- Inline style syntax: style="color:red" is HTML, style={{color:"red"}} is React

---

## Key Rules

1. ALL fetch logic lives in api.js — zero fetch() in components
2. Always handle loading, error, and empty states
3. Always use finally to set loading to false
4. Derived state — no useState for filtered lists
5. .toLowerCase() on BOTH sides of search comparison
6. Always check response.ok before response.json()
7. Named exports use {} on import, default exports do not

---

## Interview Questions

Q: What is useEffect used for?
A: Running side effects — code that reaches outside React like
   API calls, timers, subscriptions. It controls WHEN the code
   runs based on the dependency array.

Q: What is the dependency array in useEffect?
A: Controls when useEffect re-runs.
   [] = once on mount, [id] = when id changes, none = every render.

Q: What is a service layer?
A: A separate file (api.js) that contains all fetch logic.
   Components import functions from it instead of calling
   fetch() directly. Makes code reusable and maintainable.

Q: What is derived state?
A: State calculated from existing state on every render.
   No useState needed. filteredUsers is derived from users + searchQuery.
   React recalculates it automatically when dependencies change.

Q: Difference between GET and POST?
A: GET fetches data — no body needed.
   POST sends data — requires method, headers, and JSON body.

---

## Next Week
Week 4: React Router
- Multi-page navigation
- BrowserRouter, Routes, Route, Link
- useParams, useNavigate, NavLink
