import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Counter from './Counter'
import {CounterProvider } from "./contexts/CounterContext";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1> Context Counter</h1>
      <CounterProvider >
            <Counter/>
      </CounterProvider >
  
    </>
  )
}

export default App
