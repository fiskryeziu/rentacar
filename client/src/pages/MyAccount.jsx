import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthContext from '../context/AuthContext'

const MyAccount = () => {
  const { userDetails } = useContext(AuthContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (!userDetails) {
      navigate('/sign-in')
    }
  }, [navigate, userDetails])
  return <div>MyAccount</div>
}

export default MyAccount
