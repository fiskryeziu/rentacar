import React from 'react'
import { useParams } from 'react-router-dom'
import data from '../cars'
import Slider from '../components/Slider'
import { FaCalendar, FaGasPump, FaEnvelope } from 'react-icons/fa'
import { MdAirlineSeatReclineExtra } from 'react-icons/md'
import Footer from '../components/Footer'
import Service from '../components/Service'

const CarDetails = () => {
  const params = useParams()
  const carId = params.id
  const item = data.find((x) => x.id === +carId)

  return (
    <>
      <Slider images={item.images} />
      <div className="w-full flex md:justify-around flex-col md:flex-row mt-20 px-10">
        <div className="h-96 flex flex-col">
          <p className="text-4xl mb-5">
            {item.brand}, {item.name}
          </p>
          <div className="flex">
            <div className="flex flex-col shadow w-32 h-32 justify-center items-center">
              <FaCalendar className="text-5xl" />
              <p className="text-2xl font-light">{item.yearModel}</p>
              <p>Year Model</p>
            </div>
            <div className="flex flex-col shadow w-32 h-32 justify-center items-center">
              <FaGasPump className="text-5xl" />
              <p className="text-2xl font-light">{item.fuelType}</p>
              <p>Fuel type</p>
            </div>
            <div className="flex flex-col shadow w-32 h-32 justify-center items-center">
              <MdAirlineSeatReclineExtra className="text-5xl" />
              <p className="text-2xl font-light">{item.seatCapacity}</p>
              <p>Seats</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <p className="text-4xl text-accent mb-5">{item.pricePerDay} $</p>
          <label htmlFor="fromdate">From Date</label>
          <input type="date" className="input input-bordered" />
          <label htmlFor="todate">To Date</label>
          <input type="date" className="input input-bordered" />
          <button className="btn btn-accent mt-5">Reserve</button>
        </div>
      </div>
      <Service />
      <Footer />
    </>
  )
}

export default CarDetails
