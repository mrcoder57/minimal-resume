import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Register from './pages/register'
import Profile from './pages/profile'
import Login from './pages/login'
import UserProfileForm from './pages/createprofile'
import ExperienceUpload from './pages/experinceupload'
import ProjectUpload from './pages/projectupload'


function App() {
 

  return (

    <div>
      <BrowserRouter>
     
     <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/profile/:id" element={<Profile />} />
      <Route path="/" element={<Login />} />
      <Route path="/create" element={<UserProfileForm />} />
      <Route path="/experience" element={<ExperienceUpload />} />
      <Route path="/project" element={<ProjectUpload />} />
     </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
