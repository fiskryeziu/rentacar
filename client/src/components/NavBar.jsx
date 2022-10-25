import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import HamburgerMenu from './HamburgerMenu'
import AuthContext from '../context/AuthContext'

const NavBar = () => {
  const { userDetails } = useContext(AuthContext)
  return (
    <nav
      className={
        userDetails?.isAdmin
          ? 'hidden'
          : 'navbar flex items-center justify-between px-10 bg-neutral h-20'
      }
    >
      <Link to="/" className="text-2xl">
        Rent a Car
      </Link>
      <div className="hidden space-x-14 items-center  md:flex">
        <Link to="/">Home</Link>
        <Link to="/cars">Cars</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        {userDetails && !userDetails.isAdmin ? (
          <Link
            to="/my-account"
            className="btn btn-sm  btn-outline btn-secondary"
          >
            My Account
          </Link>
        ) : (
          <Link to="/sign-in" className="btn btn-sm  btn-outline btn-secondary">
            Login
          </Link>
        )}
      </div>
      <HamburgerMenu />
    </nav>
  )
}

export default NavBar
