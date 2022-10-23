import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between px-10 bg-neutral h-20 ">
      <Link to="/" className="text-2xl">
        Rent a Car
      </Link>
      <ul className="flex space-x-14">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/sign-in">Login</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
