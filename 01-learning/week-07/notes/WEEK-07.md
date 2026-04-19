# Week 6: Context API & Advanced State Management

## Table of Contents
1. [The Core Problem: Prop Drilling](#the-core-problem-prop-drilling)
2. [Context API: The Three Pieces](#context-api-the-three-pieces)
3. [useContext Hook](#usecontext-hook)
4. [useReducer: Complex State Management](#usereducer-complex-state-management)
5. [Custom Hooks](#custom-hooks)
6. [Testing with Jest](#testing-with-jest)
7. [Real-World Patterns](#real-world-patterns)
8. [Performance Optimization](#performance-optimization)
9. [Common Gotchas](#common-gotchas)

---

## The Core Problem: Prop Drilling

### What is Prop Drilling?

Imagine your app structure:
App (has theme state)
└── Layout
└── Header
└── Navigation
└── Button (needs theme!)

To get `theme` from App to Button, you must pass it through every middle component:

```javascript
// App.jsx
const [theme, setTheme] = useState("light");
<Layout theme={theme} setTheme={setTheme} />

// Layout.jsx
const Layout = ({ theme, setTheme }) => (
  <Header theme={theme} setTheme={setTheme} />
);

// Header.jsx
const Header = ({ theme, setTheme }) => (
  <Navigation theme={theme} setTheme={setTheme} />
);

// Navigation.jsx
const Navigation = ({ theme, setTheme }) => (
  <Button theme={theme} setTheme={setTheme} />
);

// Button.jsx (finally uses it!)
const Button = ({ theme, setTheme }) => (
  <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
    {theme}
  </button>
);
```

**The Problem:**
- Layout, Header, Navigation don't use theme — just pass it through
- Hard to maintain — if you forget one level, it breaks
- Messy — props everywhere
- Unscalable — imagine 20 props!

---

## Context API: The Three Pieces

Context solves prop drilling by creating a **global state container**.

### Piece 1: createContext() — Create the Container

```javascript
import { createContext } from "react";

const ThemeContext = createContext();
```

**What happens:**
- `createContext()` is a **function** (NOT a hook)
- Returns a Context object
- Used to wrap your app and let components access shared data
- Called **once at top level**, NOT inside components

**Why not a hook?**
```javascript
// Hooks have rules:
// ✅ useContext() — Can be called inside components
// ✅ useState() — Can be called inside components
// ❌ createContext() — MUST be called outside (top level)

const MyContext = createContext();  // Top level ✓

const MyComponent = () => {
  const value = useContext(MyContext);  // Inside component ✓
};
```

---

### Piece 2: Provider — Put Data Into the Container

The Provider is a **component** that wraps your app and provides data:

```javascript
import { createContext, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  // 1. Manage state
  const [theme, setTheme] = useState("light");
  
  // 2. Create functions that use this state
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  
  // 3. Return Provider with value
  return (
    <ThemeContext.Provider 
      value={{ 
        theme, 
        toggleTheme,
        otherData: "anything"
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
```

**Key Points:**

1. **State lives here:** `useState("light")`
2. **Functions live here:** `toggleTheme()`
3. **`value={}` is what children see:** Any component inside can access these
4. **`{children}`** is a special prop that holds components wrapped by Provider

**How to use it:**

```javascript
// App.jsx
import { ThemeProvider } from "./ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <Layout />
      <Header />
      <MainContent />
    </ThemeProvider>
  );
}
```

Now all components inside ThemeProvider can access theme and toggleTheme!

---

### Piece 3: useContext() — Access the Data

Any component **inside** the Provider can use the hook to access data:

```javascript
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const Button = () => {
  // Get the value from Provider
  const { theme, toggleTheme } = useContext(ThemeContext);
  
  return (
    <button 
      onClick={toggleTheme}
      className={theme === "light" ? "bg-white" : "bg-black"}
    >
      Current theme: {theme}
    </button>
  );
};
```

**What happens:**
1. `useContext(ThemeContext)` asks: "Give me what's in ThemeContext"
2. React gives back the `value={{}}` object from Provider
3. Component can destructure: `{ theme, toggleTheme }`
4. When Provider's state changes, component re-renders automatically

**Visual Flow:**
Provider stores: { theme: "light", toggleTheme: () => {} }
↓
useContext(ThemeContext)
↓
Returns: { theme: "light", toggleTheme: () => {} }
↓
Component uses it and re-renders when it changes

---

## useContext Hook

### How to Use useContext

```javascript
const { value1, value2 } = useContext(SomeContext);
```

**Must be called:**
- ✅ Inside a component function
- ✅ Inside another hook
- ❌ NOT in event handlers
- ❌ NOT outside components

**Wrong:**
```javascript
// ❌ Outside component
const { theme } = useContext(ThemeContext);

const MyComponent = () => {
  return <div>{theme}</div>;
};
```

**Right:**
```javascript
const MyComponent = () => {
  // ✅ Inside component
  const { theme } = useContext(ThemeContext);
  return <div>{theme}</div>;
};
```

### Context Value: Object vs Array

**Object (Recommended - More Flexible):**
```javascript
// Provider
<ThemeContext.Provider value={{ theme, toggleTheme, colors }}>

// Component
const { theme, toggleTheme, colors } = useContext(ThemeContext);
```

**Array (Less Flexible):**
```javascript
// Provider
<ThemeContext.Provider value={[theme, toggleTheme]}>

// Component
const [theme, toggleTheme] = useContext(ThemeContext);
```

**Why Object is Better:**
- You can add new values without breaking destructuring order
- Self-documenting: `{ theme, toggleTheme }` vs `[value1, value2]`
- Can skip values you don't need: `const { theme } = ...`

---

### Context Doesn't Prevent Re-renders

**Important misconception:**

Context **doesn't prevent re-renders** — it just lets you access data without props.

```javascript
// ✅ Component using context re-renders when context changes
const Component = () => {
  const { count } = useContext(CounterContext);  // Hooks cause re-render
  return <div>{count}</div>;
};

// ❌ Component NOT using context still re-renders if Provider changes
const Component = () => {
  // Uses data from props, not context
  return <div>Static content</div>;
  // Still re-renders if Provider re-renders!
};
```

**Solution:** Use `useCallback` and `useMemo` to prevent unnecessary re-renders (see Performance section).

---

## useReducer: Complex State Management

### The Problem: Too Many useState Calls

When you have related state, using many `useState` hooks gets messy:

```javascript
const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  // ... 10 more useState calls
};
```

**Problems:**
- Hard to manage related updates
- Easy to forget to update related state
- Lots of setters everywhere

**Solution:** `useReducer` — One state object, one dispatch function.

---

### How useReducer Works

**The Pattern:**

```javascript
const [state, dispatch] = useReducer(reducerFunction, initialValue);
```

**Three parts:**

1. **Reducer Function** — Decides how state changes
```javascript
const counterReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    case 'RESET':
      return 0;
    default:
      return state;
  }
};
```

2. **useReducer Hook** — Sets up the reducer
```javascript
const [count, dispatch] = useReducer(counterReducer, 0);
//                                    ↑                 ↑
//                                  Reducer      Initial value
```

3. **Dispatch** — Send actions to the reducer
```javascript
dispatch({ type: 'INCREMENT' });  // Add 1
dispatch({ type: 'DECREMENT' });  // Subtract 1
dispatch({ type: 'RESET' });      // Reset to 0
```

---

### Understanding Reducer Parameters

```javascript
const counterReducer = (state, action) => {
  // state = current count value (5, 10, 100, etc.)
  // action = object sent via dispatch: { type: 'INCREMENT', payload?: ... }
};
```

**How React calls it:**

User clicks button
dispatch({ type: 'INCREMENT' })
React automatically calls:
counterReducer(currentCountValue, { type: 'INCREMENT' })
Reducer returns new state (currentCountValue + 1)
Component re-renders with new state


**Key insight:** You DON'T call the reducer manually. React does it for you.

---

### Parameters Are NOT Reserved Words

`state` and `action` are just conventional names:

```javascript
// Standard (everyone uses this)
const counterReducer = (state, action) => {
  if (action.type === 'INCREMENT') return state + 1;
};

// Also valid (but confusing!)
const counterReducer = (currentValue, instruction) => {
  if (instruction.type === 'INCREMENT') return currentValue + 1;
};

// Rule: ALWAYS use 'state' and 'action' for clarity
```

---

### useReducer vs useState

**Use useState when:**
- Single piece of state
- Simple updates (just set the value)

```javascript
const [count, setCount] = useState(0);
setCount(count + 1);
```

**Use useReducer when:**
- Multiple related updates
- Complex logic for state changes
- Need to pass same function to multiple children

```javascript
const [state, dispatch] = useReducer(reducer, initialState);
dispatch({ type: 'ACTION' });
```

---

### useReducer + Context = Power

Combine them for global complex state:

```javascript
const CounterContext = createContext();

const CounterProvider = ({ children }) => {
  // useReducer manages complex state
  const [count, dispatch] = useReducer(counterReducer, 0);
  
  // Context provides it globally
  return (
    <CounterContext.Provider value={{ count, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};

// Component just uses it
const Counter = () => {
  const { count, dispatch } = useContext(CounterContext);
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
    </div>
  );
};
```

---

## Custom Hooks

### The Problem: Code Repetition

Multiple components need the same logic:

```javascript
// Dashboard.jsx
const Dashboard = () => {
  const { user, userLogin, userLogout } = useContext(AuthContext);
  // ... use user
};

// Profile.jsx
const Profile = () => {
  const { user, userLogin, userLogout } = useContext(AuthContext);
  // ... use user
};

// Settings.jsx
const Settings = () => {
  const { user, userLogin, userLogout } = useContext(AuthContext);
  // ... use user
};

// Navbar.jsx
const Navbar = () => {
  const { user, userLogin, userLogout } = useContext(AuthContext);
  // ... use user
};
```

Same line written 10 times!

---

### The Solution: Custom Hooks

Wrap repeated logic in a function starting with `use`:

```javascript
// useAuth.js
import { useContext } from "react";
import { AuthContext } from "./AuthContext";

const useAuth = () => {
  const context = useContext(AuthContext);
  
  if (!context) {
    throw new Error("useAuth must be inside AuthProvider");
  }
  
  return context;
};

export default useAuth;
```

Now use it everywhere:

```javascript
// Dashboard.jsx
const Dashboard = () => {
  const { user, userLogin, userLogout } = useAuth();
  // ... use user
};

// Profile.jsx
const Profile = () => {
  const { user, userLogin, userLogout } = useAuth();
  // ... use user
};
```

**One line instead of three!**

---

### Custom Hooks Can Add Logic

Hooks can do more than just wrap useContext:

```javascript
const useCounterSafe = () => {
  const { count, dispatch } = useContext(CounterContext);
  
  // Add validation logic
  const safeIncrement = () => {
    if (count >= 100) {
      console.warn("Count cannot exceed 100");
      return;
    }
    dispatch({ type: 'INCREMENT' });
  };
  
  // Add logging
  const smartDispatch = (action) => {
    console.log(`Before: ${count}, Action: ${action.type}`);
    dispatch(action);
  };
  
  return { count, safeIncrement, smartDispatch };
};
```

**Same context, different behavior depending on the hook!**

```javascript
// Component that needs validation
const FormInput = () => {
  const { count, safeIncrement } = useCounterSafe();
  return <button onClick={safeIncrement}>Increment (max 100)</button>;
};

// Component that needs logging
const DebugCounter = () => {
  const { count, smartDispatch } = useCounterSafe();
  return <button onClick={() => smartDispatch({ type: 'INCREMENT' })}>Debug +</button>;
};
```

---

### Rules for Custom Hooks

1. **Must start with `use`:**
```javascript
   const useCustom = () => { ... }   // ✅
   const customHook = () => { ... }  // ❌
```

2. **Can call other hooks:**
```javascript
   const useCustom = () => {
     const [state, setState] = useState();      // ✅
     const contextValue = useContext(Context);  // ✅
     const data = useFetch(url);                // ✅
   };
```

3. **Must be called inside components:**
```javascript
   // ✅ Inside component
   const MyComponent = () => {
     const value = useCustom();
     return <div>{value}</div>;
   };

   // ❌ Outside component
   const value = useCustom();
   const MyComponent = () => <div>{value}</div>;
```

4. **Can return anything:**
```javascript
   return { value, function };    // Object
   return [value, setValue];      // Array
   return simpleValue;            // Single value
   return { ...bunch, ...of, ...stuff };
```

---

## Testing with Jest

### Why Test?

Tests verify your code works **before** bugs happen:

```javascript
// Without tests: Hope code works ✓ Fragile
// With tests: Know code works ✓ Confident
```

---

### Jest Syntax

**Basic structure:**

```javascript
test('what you are testing', () => {
  // Arrange: Set up data
  const input = 5;
  
  // Act: Do the thing
  const result = reducerfn(input, { type: 'INCREMENT' });
  
  // Assert: Check the result
  expect(result).toBe(6);
});
```

**Anatomy:**
- `test()` — Jest function that defines one test
- `'description'` — Human-readable test name (shows in results)
- `() => { ... }` — Test code (arrow function)
- `expect().toBe()` — Assertion (what should be true)

---

### Common Assertions

```javascript
// Equality
expect(result).toBe(6);              // Exact equality (===)
expect(result).toEqual(6);           // Same value
expect(result).not.toBe(5);          // NOT equal

// Numbers
expect(result).toBeGreaterThan(5);   // > 5
expect(result).toBeLessThan(10);     // < 10
expect(result).toBeGreaterThanOrEqual(5);

// Strings
expect(message).toContain('error');  // String contains
expect(message).toMatch(/error/);    // Regex match

// Truthiness
expect(value).toBeTruthy();          // Is true
expect(value).toBeFalsy();           // Is false

// Type
expect(value).toBeNull();
expect(value).toBeUndefined();
expect(value).toBeDefined();
```

---

### Testing a Reducer Function

```javascript
test('INCREMENT should add 1', () => {
  // Arrange
  const initialState = 5;
  const action = { type: 'INCREMENT' };
  
  // Act
  const result = counterReducer(initialState, action);
  
  // Assert
  expect(result).toBe(6);
});

test('DECREMENT should subtract 1', () => {
  const result = counterReducer(10, { type: 'DECREMENT' });
  expect(result).toBe(9);
});

test('RESET should return 0', () => {
  const result = counterReducer(999, { type: 'RESET' });
  expect(result).toBe(0);
});

test('Unknown action should return current state', () => {
  const result = counterReducer(5, { type: 'UNKNOWN' });
  expect(result).toBe(5);
});
```

---

### Running Tests

```bash
npm test              # Run all tests
npm test -- --watch  # Watch mode (re-run on file change)
npm test -- fileName # Run specific test file
```

**Output:**
PASS  src/reducer.test.js
✓ INCREMENT should add 1
✓ DECREMENT should subtract 1
✓ RESET should return 0
Test Suites: 1 passed, 1 total
Tests:       3 passed, 3 total

---

## Real-World Patterns

### Pattern 1: Authentication Context

Every app needs login/logout. Structure:

```javascript
const [user, setUser] = useState(null);  // null = logged out

// When user logs in:
{
  name: "Sherry Singh",
  email: "sherry@example.com",
  role: "admin",        // For permissions checks
  token: "eyJhbGc..." // For API requests
}

// When user logs out:
null
```

**Why these 4 fields:**

| Field | Purpose |
|-------|---------|
| **name** | Display user name in UI |
| **email** | Contact info, login identifier |
| **role** | Check permissions (admin vs user) |
| **token** | Proof of login (sent to server) |

**Usage:**

```javascript
const Dashboard = () => {
  const { user } = useAuth();
  
  if (!user) return <Redirect to="/login" />;
  
  if (user.role === 'admin') {
    return <AdminDashboard user={user} />;
  } else {
    return <UserDashboard user={user} />;
  }
};
```

---

### Pattern 2: Language/i18n (Internationalization)

Multi-language apps need translations:

```javascript
const translations = {
  en: {
    welcome: "Welcome",
    logout: "Logout",
    language: "Language",
    settings: "Settings"
  },
  es: {
    welcome: "Bienvenido",
    logout: "Cerrar sesión",
    language: "Idioma",
    settings: "Configuración"
  },
  fr: {
    welcome: "Bienvenue",
    logout: "Déconnexion",
    language: "Langue",
    settings: "Paramètres"
  }
};
```

**Why organize by language first:**

```javascript
// Organized by language
const text = translations["es"].welcome;  // Easy! → "Bienvenido"

// If organized by key:
const text = translations.welcome["es"]; // Awkward
```

**Store language code, not translations:**

```javascript
const [currentLanguage, setCurrentLanguage] = useState("en");

const changeLanguage = (lang) => {
  setCurrentLanguage(lang);  // Just "en", "es", "fr"
};

// Use in components:
const welcomeText = translations[currentLanguage].welcome;
```

---

### Pattern 3: Theme Context

Global theme management:

```javascript
const [theme, setTheme] = useState("light");

const toggleTheme = () => {
  setTheme(theme === "light" ? "dark" : "light");
};

// In components:
const Button = () => {
  const { theme } = useContext(ThemeContext);
  
  return (
    <button 
      className={
        theme === "light" 
          ? "bg-white text-black" 
          : "bg-black text-white"
      }
    >
      Click me
    </button>
  );
};
```

---

## Performance Optimization

### Understanding Re-render

**Re-render** = React runs your component function again to update the UI.

```javascript
const Counter = () => {
  console.log("Counter component rendered");  // Logs every time
  
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};

// Flow:
// 1. Component mounts → "Counter component rendered"
// 2. Click button → count changes
// 3. Component re-renders → "Counter component rendered"
// 4. Click again → count changes
// 5. Re-render → "Counter component rendered"
```

**Re-renders are fine!** They happen when state/props change.

---

### The Hidden Problem: Function Objects

```javascript
const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState("en");
  
  // WITHOUT useCallback:
  const changeLanguage = (lang) => {
    setCurrentLanguage(lang);
  };
  // Every time Provider re-renders, this creates a NEW function!
  // Even though it does the same thing!
};
```

**Why this matters:**

```javascript
// Pseudo-code for child component
const LanguageSwitcher = ({ changeLanguage }) => {
  // Does React think changeLanguage is the same as last render?
  const isSame = changeLanguage === previousChangeLanguage;  // FALSE!
  
  // It's a different function object, so re-render!
};
```

**The effect:**
1. User clicks language button
2. Provider re-renders
3. `changeLanguage` function is recreated
4. Children see "This is a different function!" → unnecessary re-render
5. Multiply this by 100 components = performance issues

---

### Solution: useCallback

Memoize the function so it's not recreated on every render:

```javascript
const changeLanguage = useCallback((lang) => {
  setCurrentLanguage(lang);
}, []);  // ← Empty array = never change this function
```

**After:**
1. User clicks button
2. Provider re-renders
3. `changeLanguage` returns the **same function object**
4. Children: "This is the same function" → no unnecessary re-render
5. Performance improved!

---

### useCallback vs useMemo vs useEffect

**All three use dependency arrays, but different purposes:**

```javascript
// useCallback: Memoize a FUNCTION
const memoFunc = useCallback(() => {
  doSomething();
}, []);  // Run this function, then reuse the same one

// useMemo: Memoize a VALUE (result of expensive calculation)
const memoValue = useMemo(() => {
  return expensiveCalculation();
}, []);  // Calculate this value, then reuse the same one

// useEffect: Run SIDE EFFECTS (fetching, subscriptions, timers)
useEffect(() => {
  fetchData();
}, []);  // Run this code, then clean up if needed
```

---

### Dependency Array Rules

```javascript
// [] = "Do this once when component mounts, never again"
useCallback(() => {}, []);
useMemo(() => 5 + 5, []);
useEffect(() => { fetchData(); }, []);

// [dependency] = "Do this, but recreate when dependency changes"
const handleClick = useCallback(() => {
  console.log(count);  // Uses count variable
}, [count]);  // Recreate when count changes

// No array = "Do this every render" (usually bad)
useCallback(() => {}, );  // ← Problematic!
useEffect(() => { fetchData(); });  // Fetches on every render!
```

---

### Measuring Performance

Use React DevTools Profiler:

Open Chrome DevTools
Go to React DevTools tab
Click "Profiler" tab
Click Record button
Interact with app (click buttons)
Stop recording
See which components re-rendered and how long


**What to look for:**
- Which components re-rendered unnecessarily?
- Which operations took the longest?
- Can you optimize those with useCallback/useMemo?

---

## Common Gotchas

### Gotcha 1: "useAuth must be inside AuthProvider"

**Problem:**
```javascript
// App.jsx
<Dashboard />  {/* ❌ Not wrapped by AuthProvider */}

const Dashboard = () => {
  const { user } = useAuth();  // ERROR!
};
```

**Solution:**
```javascript
// App.jsx
<AuthProvider>
  <Dashboard />  {/* ✅ Now wrapped */}
</AuthProvider>
```

---

### Gotcha 2: useContext Returns Undefined

**Problem:**
```javascript
const Dashboard = () => {
  const value = useContext(WrongContext);  // ❌ Wrong context
  console.log(value);  // undefined
};
```

**Solutions:**
```javascript
// Check the import
import { MyContext } from "./MyContext";  // ✅ Correct file

// Check the context name
useContext(MyContext);  // Not MyContext2, MyContextProvider, etc.

// Verify component is wrapped
<MyProvider>
  <Dashboard />  {/* ✅ Wrapped */}
</MyProvider>
```

---

### Gotcha 3: Button Click Does Nothing

**Problem:**
```javascript
<button onClick={changeLanguage("en")}>English</button>
// ❌ changeLanguage("en") is called IMMEDIATELY when rendering
// Not when button is clicked!
```

**Solution:**
```javascript
// If you need to pass arguments: use arrow function
<button onClick={() => changeLanguage("en")}>English</button>

// If no arguments: use function directly
<button onClick={handleLogout}>Logout</button>
```

**Rule:**
| Scenario | Syntax |
|----------|--------|
| Function needs arguments | `onClick={() => func(arg)}` |
| Function needs no arguments | `onClick={func}` |
| Direct function call | `onClick={func()}` ❌ Wrong! |

---

### Gotcha 4: Creating New Objects/Arrays in Value

**Problem:**
```javascript
const MyProvider = ({ children }) => {
  return (
    <MyContext.Provider value={{ newObject: {} }}>
      {/* ❌ New object created on every render! */}
    </MyContext.Provider>
  );
};
```

**Solution:**
```javascript
const MyProvider = ({ children }) => {
  const value = useMemo(() => ({ data: "constant" }), []);
  
  return (
    <MyContext.Provider value={value}>
      {/* ✅ Same object every render */}
    </MyContext.Provider>
  );
};
```

---

### Gotcha 5: Forgetting to Export

**Problem:**
```javascript
// AuthContext.jsx
const AuthContext = createContext();
const AuthProvider = ({ children }) => { ... };

// ❌ Not exported!
```

**Solution:**
```javascript
export { AuthContext, AuthProvider };

// Or both as named exports
export default AuthProvider;
```

---

## Week 6 Summary

### What You've Learned

| Concept | Mastery Level | Use Case |
|---------|--------------|----------|
| **Context API** | ⭐⭐⭐ | Global state (theme, language, auth) |
| **useContext** | ⭐⭐⭐ | Access context in components |
| **useReducer** | ⭐⭐⭐ | Complex state with multiple actions |
| **Custom Hooks** | ⭐⭐⭐ | Reusable logic across components |
| **Jest Testing** | ⭐⭐ | Verify reducer functions work |
| **Auth Pattern** | ⭐⭐⭐ | Login/logout with global user state |
| **i18n Pattern** | ⭐⭐⭐ | Multi-language support |
| **useCallback** | ⭐⭐ | Performance optimization |

### Projects Built

1. **Counter Context** — Basic create → provide → consume
2. **Theme Context** — Light/dark with Tailwind
3. **useReducer** — Multiple actions (INCREMENT/DECREMENT/RESET)
4. **Custom Hook** — Reusable useCounter
5. **Jest Testing** — Unit tests for reducer
6. **Auth Context** — Login/logout pattern
7. **Language Switcher** — Multi-language support
8. **Performance Audit** — useCallback optimization
