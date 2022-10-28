import { useContext } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import AuthContext from '../context/AuthContext'

const ProtectedRoute = () => {
  const userDetails = useSelector((state) => state.userDetails)
  const { userInfo } = userDetails

  return userInfo && userInfo.isAdmin ? <Outlet /> : <Navigate to="/sign-in" />
}

export default ProtectedRoute
