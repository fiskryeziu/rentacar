import { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import AuthContext from '../context/AuthContext'

const ProtectedRoute = ({ children }) => {
  const { userDetails } = useContext(AuthContext)
  const location = useLocation()

  if (!userDetails) {
    return <Navigate to="/" replace state={{ from: location }} />
  } else if (userDetails && !userDetails.isAdmin) {
    return <Navigate to="/" replace state={{ from: location }} />
  }

  return children
}

export default ProtectedRoute
