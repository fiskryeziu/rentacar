import { useContext } from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import AuthContext from '../context/AuthContext'

const ProtectedRoute = () => {
  const { userDetails } = useContext(AuthContext)

  return userDetails && userDetails.isAdmin ? (
    <Outlet />
  ) : (
    <Navigate to="/sign-in" />
  )
}

export default ProtectedRoute
