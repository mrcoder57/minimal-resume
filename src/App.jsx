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


function App() {
 

  return (

    <div>
      <BrowserRouter>
      <Navbar/>
     <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/profile/:id" element={<Profile />} />
      <Route path="/" element={<Login />} />
      <Route path="/create" element={<UserProfileForm />} />
     </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
