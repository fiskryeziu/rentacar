import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between  px-10 bg-neutral h-20 ">
      <Link to="/" className="text-2xl">
        Rent a Car
      </Link>
      <div className="flex space-x-14 items-center ">
        <Link to="/">Home</Link>
        <Link to="/cars">Cars</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/sign-in" className="btn btn-sm  btn-outline btn-secondary">
          Login
        </Link>
      </div>
    </nav>
  )
}

export default NavBar
