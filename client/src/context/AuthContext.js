import { createContext, useState } from 'react'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const data = {
    name: 'Fisnik',
    isAdmin: false,
  }
  const [userDetails] = useState(data)

  return (
    <AuthContext.Provider value={{ userDetails }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
