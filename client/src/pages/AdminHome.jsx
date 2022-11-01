import React from 'react'
import { FaBookmark, FaCar, FaSignInAlt, FaUserAlt } from 'react-icons/fa'
import { AiOutlineDashboard } from 'react-icons/ai'
import { Link, Outlet } from 'react-router-dom'
import AdminNavbar from '../components/AdminNavbar'

const AdminHome = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center md:justify-between">
      <div className="hidden bg-neutral md:sticky top-0 left-0 w-[20%] h-screen md:flex">
        <ul className="menu p-2 w-full rounded-box gap-5 mt-10">
          <li>
            <Link to="dashboard">
              <AiOutlineDashboard />
              <p>Dashboard</p>
            </Link>
          </li>
          <li>
            <Link to="reservations">
              <FaBookmark />
              <p>Reservation</p>
            </Link>
          </li>
          <li>
            <Link to="cars">
              <FaCar />
              <p>Cars</p>
            </Link>
          </li>
          <li>
            <Link to="users">
              <FaUserAlt />
              <p>Users</p>
            </Link>
          </li>
          <li>
            <span>
              <FaSignInAlt />
              <p>Sign Out</p>
            </span>
          </li>
        </ul>
      </div>
      {/* {mobile navbar} */}
      <AdminNavbar />
      <div className="flex md:w-3/4 mt-20 flex-col">
        <Outlet />
      </div>
    </div>
  )
}

export default AdminHome
