import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import AboutUs from './components/AboutUs'
import Hero from './components/Hero'
import Section3 from './components/Section3'
import Services from './components/Services'
import Testimonial from './components/Testimonials'
import NewsLetter from './components/NewsLetter'
import Case from './components/Case'
import Clients from './components/Clients'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Hero/>
     <AboutUs/>
    <Section3/>
    <Services/>
    <Testimonial/>
    <Case/>
    <NewsLetter/>
    <Clients/>
    </>
  )
}

export default App
