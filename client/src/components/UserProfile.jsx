import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Spinner from './Spinner'

const UserProfile = () => {
  const userDetails = useSelector((state) => state.userDetails)
  const { userInfo, loading } = userDetails

  const [formData, setFormData] = useState({
    name: userInfo.name,
    email: userInfo.email,
    phoneNumber: userInfo.phoneNumber,
    password: '',
    confirmPassword: '',
  })
  const { name, email, phoneNumber, password, confirmPassword } = formData

  // const dispatch = useDispatch()

  const onChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }
  return (
    <form className="form-control w-[300px] mx-auto mb-20">
      <label htmlFor="name">Name</label>
      <input
        type="text"
        placeholder="Enter name"
        name="name"
        value={name}
        disabled
        className="input input-bordered w-full mb-6"
        required
      />
      <label htmlFor="email">Email</label>
      <input
        type="text"
        placeholder="Enter email"
        name="email"
        value={email}
        className="input input-bordered w-full mb-6"
        onChange={onChange}
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
        required
      />
      <label htmlFor="phonenumber">Phone Number</label>
      <input
        type="tel"
        placeholder="Enter phoneNumber"
        name="phoneNumber"
        value={phoneNumber}
        maxLength={12}
        pattern="[0-9]+"
        className="input input-bordered w-full mb-6"
        onChange={onChange}
        required
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        placeholder="Enter password"
        name="password"
        value={password}
        className="input input-bordered w-full mb-6"
        onChange={onChange}
        required
      />
      <input
        type="password"
        placeholder="Confirm password"
        name="confirmPassword"
        value={confirmPassword}
        className="input input-bordered w-full"
        onChange={onChange}
        required
      />
      <button className="btn mt-6">Save</button>
    </form>
  )
}

export default UserProfile
