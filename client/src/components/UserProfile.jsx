import React from 'react'

const UserProfile = () => {
  return (
    <form className="form-control">
      <label htmlFor="name">Name</label>
      <input
        type="text"
        placeholder="Enter name"
        className="input input-bordered  w-full mb-6"
      />
      <label htmlFor="password">Email</label>
      <input
        type="Email"
        placeholder="Enter Email"
        className="input input-bordered w-full mb-6"
      />
      <label htmlFor="password">Phone Number</label>
      <input
        type="Email"
        placeholder="Enter Email"
        className="input input-bordered w-full mb-6"
      />
      <label htmlFor="password">Address</label>
      <input
        type="Email"
        placeholder="Enter Email"
        className="input input-bordered w-full mb-6"
      />
      <label htmlFor="password">City</label>
      <input
        type="Email"
        placeholder="Enter Email"
        className="input input-bordered w-full mb-6"
      />
      <button className="btn mt-6">Send</button>
    </form>
  )
}

export default UserProfile
