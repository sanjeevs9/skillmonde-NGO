import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import AboutUs from './components/AboutUs'
import Hero from './components/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Hero/>
     <AboutUs/>
    </>
  )
}

export default App
