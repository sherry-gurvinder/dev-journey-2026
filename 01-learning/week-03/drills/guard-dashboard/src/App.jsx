import { useState } from 'react'
import './App.css'
import Login  from './login'
import Signup from './signup'
import Dashboard  from './dashboard'
function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <section id="center">
      <Login/>
      <Signup />
      <Dashboard/>
      </section>
      <div className="ticks"></div>
    
    </>
  )
}
export default App
