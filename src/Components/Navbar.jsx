import React from 'react'
import github from "../assets/git.svg"
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className="navbar text-slate-700 bg-slate-100 font-mono">
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden ">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </div>
        <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          <li><a href='#about'>About</a></li>
          <li>
            <a href='#work'>Works</a>
          </li>
          <li><a href='#contact'>Contact</a></li>
          <li><Link to='/'>Login</Link></li>
        </ul>
      </div>
      <Link to='/' className="btn btn-ghost text-xl text-slate-700">MINIMAL</Link>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
        <li><a href='#about'>About</a></li>
        <li>
          <a href='#work'>Works</a>
        </li>
        <li><a href='#contact'>Contact</a></li>
        <li><Link to='/'>Login</Link></li>
      </ul>
    </div>
    <div className="navbar-end">
      {/* <a href='https://github.com/mrcoder57' target="_blank"><img src={github} className=' h-8 w-8'/></a> */}
      <Link to='/create'>Signup</Link>
    </div>
  </div>
  )
}

export default Navbar