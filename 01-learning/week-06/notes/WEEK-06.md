# Week 6: Context API Mastery
## Monday — The Problem & The Solution

### What We Learned Today

#### The Problem: Prop Drilling
- If you have `theme` state at App level and Button is 5 levels deep
- You have to pass `theme` through 4 middle components that don't even use it
- This is called **prop drilling** — annoying and unmaintainable

#### The Solution: Context API
Context is a **global state container** that lets components access data without passing props.

**Three pieces of Context:**

1. **Create** — `createContext()` creates an empty container
```javascript
   const CounterContext = createContext();
```

2. **Provide** — The Provider component puts data into the container
```javascript
   const CounterProvider = ({ children }) => {
     const [count, setCount] = useState(0);
     return (
       <CounterContext.Provider value={{ count, counter }}>
         {children}
       </CounterContext.Provider>
     );
   };
```

3. **Consume** — Components inside use `useContext()` to grab the data
```javascript
   const { count, counter } = useContext(CounterContext);
```

### Key Insights

- `createContext()` is NOT a hook (hooks start with `use`)
- `children` is a special prop that holds what's inside a component
- `useContext()` returns the **object** you passed to `.Provider value={}`
- The component using `useContext()` must be **inside** the Provider in the tree

### Drill 1: Counter Context ✅

Built a simple counter using Context:
- Created `CounterContext.jsx` with `CounterContext` and `CounterProvider`
- Created `Counter.jsx` component that uses `useContext(CounterContext)`
- Wrapped `<Counter />` with `<CounterProvider>` in App.jsx
- Button increments count when clicked

**Committed:** `Week 6 Monday: Drill 1 - Counter Context - create, provide, consume`

---

### Key Takeaway
Context solves prop drilling by letting any child component ask for data directly, without passing through middle components.