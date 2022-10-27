import { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const data = {
    name: 'Fisnik',
    isAdmin: true,
  }
  const [userDetails] = useState(null)

  return (
    <AuthContext.Provider value={{ userDetails }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
