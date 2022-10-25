import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className="relative flex justify-center flex-col items-center pt-12 mx-2">
      <h1 className="text-center text-2xl">Login</h1>
      <form className="form-control w-full max-w-md">
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
          className="input input-bordered w-full"
        />
        <Link to="/sign-up" className="link link-primary">
          Register
        </Link>
        <button className="btn mt-6">Sign in</button>
      </form>
    </div>
  )
}

export default Login