import { useState } from 'react'
import './App.css'
import Login  from './login'
import Signup from './signup'
import Dashboard  from './dashboard'
import UserList from './UsersList'
import CreatePost from "./CreatePost";
function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <section id="center">
      <CreatePost/>
      <Login/>
      <Signup />
      <Dashboard/>
       <UserList/>
      </section>
      <div className="ticks"></div>
    
    </>
  )
}
export default App
