import React, { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AuthContext from '../context/AuthContext'

const Register = () => {
  const { userDetails } = useContext(AuthContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (userDetails) {
      navigate('/')
    }
  }, [navigate, userDetails])
  return (
    <div className="relative flex justify-center flex-col items-center pt-12 mx-2">
      <h1 className="text-center text-2xl">Register</h1>
      <form className="form-control w-full max-w-md">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          placeholder="Enter name"
          className="input input-bordered w-full mb-6"
        />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          placeholder="Enter email"
          className="input input-bordered w-full mb-6"
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Enter password"
          className="input input-bordered w-full mb-6"
        />
        <input
          type="password"
          placeholder="Confirm password"
          className="input input-bordered w-full"
        />
        <Link to="/sign-in" className="link link-primary">
          Sign in
        </Link>
        <button className="btn mt-6">Sign up</button>
      </form>
    </div>
  )
}

export default Register
