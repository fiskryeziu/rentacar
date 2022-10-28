import { useContext } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import AuthContext from '../context/AuthContext'

const RedirectRoutes = () => {
  //only when logged in as Admin
  //show only the admin routes and its outlet's
  const userDetails = useSelector((state) => state.userDetails)
  const { userInfo } = userDetails

  return userInfo && userInfo.isAdmin ? <Navigate to="admin" /> : <Outlet />
}

export default RedirectRoutes
