import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header/Header'
import Products from './components/products/Products'
import Footer from './components/footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <div className='container'>
        <Products />
      </div>

      {/* <Footer /> */}
    </>
  )
}

export default App
