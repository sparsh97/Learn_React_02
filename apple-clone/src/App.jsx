import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
import Model from './components/Model'

function App() {

  return (
    <main className="bg-balck">
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
    </main>
  )
}

export default App
