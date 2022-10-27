import { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import AuthContext from '../context/AuthContext'

const RedirectRoutes = () => {
  //only when logged in as Admin
  //show only the admin routes and its outlet's
  const { userDetails } = useContext(AuthContext)

  return userDetails && userDetails.isAdmin ? (
    <Navigate to="admin" />
  ) : (
    <Outlet />
  )
}

export default RedirectRoutes
