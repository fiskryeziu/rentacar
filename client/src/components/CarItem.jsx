import React from 'react'

const CarItem = ({ car }) => (
  <div className="card card-compact w-96 bg-base-100 shadow-xl">
    <figure>
      <img
        src={car.images[0]}
        alt="Shoes"
        className="w-full h-56 object-cover"
      />
    </figure>
    <div className="card-body">
      <h2 className="card-title">{car.brand}</h2>
      <p>{car.name}</p>
      <div className="card-actions justify-end">
        <button className="btn btn-primary">Reserve Now</button>
      </div>
    </div>
  </div>
)

export default CarItem
