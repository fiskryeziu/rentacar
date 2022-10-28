import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = () => {
  const userDetails = useSelector((state) => state.userDetails)
  const { userInfo } = userDetails

  return userInfo && userInfo.isAdmin ? <Outlet /> : <Navigate to="/sign-in" />
}

export default ProtectedRoute
