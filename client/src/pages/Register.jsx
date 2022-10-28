import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { registerUser } from '../features/user/userSlice'

const Register = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const { email, password } = formData

  const dispatch = useDispatch()

  const userDetails = useSelector((state) => state.userDetails)
  const { userInfo } = userDetails

  const navigate = useNavigate()

  useEffect(() => {
    if (userInfo) {
      navigate('/')
    }
  }, [navigate, userInfo])

  const onChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(registerUser({ email, password }))
  }
  return (
    <div className="relative flex justify-center flex-col items-center pt-12 mx-2">
      <h1 className="text-center text-2xl">Register</h1>
      <form className="form-control w-full max-w-md" onSubmit={submitHandler}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          placeholder="Enter name"
          className="input input-bordered w-full mb-6"
          onChange={onChange}
        />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          placeholder="Enter email"
          className="input input-bordered w-full mb-6"
          onChange={onChange}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Enter password"
          className="input input-bordered w-full mb-6"
          onChange={onChange}
        />
        <input
          type="password"
          placeholder="Confirm password"
          className="input input-bordered w-full"
          onChange={onChange}
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
