import React from 'react'

const ReservationCard = ({ reservation }) => {
  return (
    <div className="card card-compact max-w-sm w-full bg-base-100 shadow-xl image-full">
      <figure>
        <img src={reservation.images[0]} alt="carimg" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{reservation.brand}</h2>
        <p>The car is reserved from 12/01/2022 to 15/01/2022</p>
        <div>
          {reservation.isConfirmed ? (
            <button className="btn btn-xs btn-success btn-outline">
              confirmed
            </button>
          ) : (
            <button className="btn btn-xs btn-warning btn-outline">
              not confirmed
            </button>
          )}
          {reservation.isPaid && (
            <button className="btn btn-xs btn-success btn-outline">paid</button>
          )}
        </div>
        <div className="card-actions justify-end">
          {reservation.isConfirmed && !reservation.isPaid && (
            <button className="btn  btn-secondary btn-sm md:btn-md">
              Buy Now
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default ReservationCard
