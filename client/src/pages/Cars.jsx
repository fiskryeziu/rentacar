import React from 'react'
import CarLists from '../components/CarLists'
import Footer from '../components/Footer'
import Range from '../components/Range'
import Service from '../components/Service'

const Cars = () => {
  return (
    <>
      <div className="w-full flex flex-col justify-between md:flex-row">
        <Range min={0} max={1000} />

        <div className="md:w-3/4">
          <CarLists />
        </div>
      </div>
      <Service />
      <Footer />
    </>
  )
}

export default Cars
