import { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const data = {
    name: 'Fisnik',
    isAdmin: false,
  }
  const [userDetails] = useState(data)
  const navigate = useNavigate()

  useEffect(() => {
    if (userDetails && userDetails.isAdmin) {
      // const origin = pathName || '/admin/dashboard'
      // navigate(origin)
      navigate('/admin/dashboard')
    }
  }, [userDetails, navigate])

  return (
    <AuthContext.Provider value={{ userDetails }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
