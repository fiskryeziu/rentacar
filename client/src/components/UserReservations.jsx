import React from 'react'
import cars from '../cars'
import ReservationCard from './ReservationCard'

const UserReservations = () => {
  return (
    <div className="flex flex-col gap-4 mx-2">
      {cars.map((car) => (
        <ReservationCard key={car.id} car={car} />
      ))}
    </div>
  )
}

export default UserReservations
