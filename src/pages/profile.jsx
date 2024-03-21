import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import About from '../Components/About'
import Work from "../Components/Work"
import Projects from '../Components/Projects'
import Contact from '../Components/Contact'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import YouTubeVideo from '../Components/intro'
import Linkedin from '../Components/linkedin'
const Profile = () => {
  return (
   <div>
    <Navbar/>
    <Hero/>
    <About/>
    <YouTubeVideo/>
    <Linkedin/>
    <Work/>
    <Projects/>
    <Contact/>
    </div>
  )
}

export default Profile