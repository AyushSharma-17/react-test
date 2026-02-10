import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './header'
import sum from './sumf'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>hello
        <Header />                     //  header component imported here
        <h1>hello</h1>
        <h1>{sum()}  sum function imported here</h1>
      </div>
    </>
  )
}

export default App
