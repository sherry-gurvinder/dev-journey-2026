# Week 4: React Router — Multi-Page Applications

## Date Completed
April 1, 2026

## Concepts Learned

### 1. BrowserRouter
- Wraps entire app in main.jsx
- Creates routing context for all child components
- Only ONE BrowserRouter per app

### 2. Routes + Route
- Routes is the switchboard — only one route renders at a time
- Route takes two props: path and element
- path="*" catches all unmatched URLs (404)

### 3. Link vs NavLink
- Link — basic navigation, never refreshes the page
- NavLink — same as Link but knows if it's active
- NavLink style prop takes a FUNCTION not an object
- isActive === true when URL matches the link

### 4. useParams
- Reads dynamic segments from the URL
- path="/users/:id" → useParams() returns { id: "42" }
- Params are ALWAYS strings — convert with Number(id) if needed

### 5. useNavigate
- Programmatic navigation — navigate from code not clicks
- navigate("/users") — go to a route
- navigate(-1) — go back (browser back button)
- navigate("/users", { replace: true }) — replace history

## Folder Structure
src/
├── components/    ← reusable pieces (Navbar)
├── pages/         ← one per route
├── services/      ← api.js fetch logic
├── App.jsx        ← routes live here
└── main.jsx       ← BrowserRouter lives here

## Key Rules
- NEVER use <a href> for internal navigation — always <Link>
- ALL fetch logic in api.js — zero fetch() in components
- Paths always start with /
- CSS in React uses camelCase — fontWeight not font-weight
- Default exports import without {} — named exports import with {}

## Common Mistakes
- RouterBrowser ❌ → BrowserRouter ✅
- import from "react-router" ❌ → "react-router-dom" ✅
- fontweight ❌ → fontWeight ✅
- path="users/:id" ❌ → path="/users/:id" ✅
- Params are strings — "42" not 42

## Mini-Project Built
API Dashboard with:
- Dashboard — search user by ID
- UserList — fetch all users + search filter
- UserDetail — fetch single user by ID + back button
- CreatePost — form with redirect on success
- NotFound — 404 catch-all
- Navbar — NavLink with active styles
- api.js — getUsers, getUserById, createPost

## Interview Questions
Q: What is client-side routing?
A: JavaScript handles URL changes without server requests.
   React swaps components — no page reload.

Q: Difference between Link and NavLink?
A: NavLink knows if its route is currently active (isActive).
   Used for navigation menus to highlight current page.

Q: What does useParams return?
A: An object with dynamic URL segments as strings.
   path="/users/:id" + URL /users/42 → { id: "42" }

Q: When to use useNavigate vs Link?
A: Link = user clicks to navigate.
   useNavigate = code navigates automatically (after form submit, after login).

## Next Week
Week 5: Tailwind CSS
- Utility classes
- Responsive design
- Professional UI components
