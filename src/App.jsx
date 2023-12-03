import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Work from "./Components/Work"
import Projects from './Components/Projects'
import Contact from './Components/Contact'


function App() {
 

  return (
    <div>
     <Navbar/>
     <Hero/>
     <About/>
     <Work/>
     <Projects/>
     <Contact/>
    </div>
  )
}

export default App
