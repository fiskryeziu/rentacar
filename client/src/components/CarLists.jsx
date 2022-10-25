import React from 'react'
import CarItem from './CarItem'
import cars from '../cars'

const CarLists = () => {
  return (
    <div className="flex flex-wrap gap-5 justify-center my-20 px-5">
      {cars.map((car) => (
        <CarItem car={car} key={car.id} />
      ))}
    </div>
  )
}

export default CarLists
