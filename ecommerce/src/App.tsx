import { useState } from 'react'
import './App.css'
import { Button } from './components/ui/button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p>{count}</p>
      <Button  onClick={() => setCount(prev => prev + 1)}>Click me!!</Button>
    </>
  )
}

export default App
