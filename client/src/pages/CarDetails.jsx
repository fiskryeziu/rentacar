import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Slider from '../components/Slider'
import { FaCalendar, FaGasPump } from 'react-icons/fa'
import { MdAirlineSeatReclineExtra } from 'react-icons/md'
import Footer from '../components/Footer'
import Service from '../components/Service'
import { useDispatch, useSelector } from 'react-redux'
import { getCarbyId } from '../features/car/carDetailsSlice'
import Spinner from '../components/Spinner'
import Alert from '../components/Alert'

const CarDetails = () => {
  const params = useParams()
  const carId = params.id

  const dispatch = useDispatch()
  const carDetails = useSelector((state) => state.carDetails)

  const { loading, error, car } = carDetails

  useEffect(() => {
    dispatch(getCarbyId(carId))
  }, [dispatch, carId])

  if (loading) {
    return <Spinner />
  }
  return (
    <>
      {error ? (
        <Alert variant="alert-error" message={error} />
      ) : (
        <>
          <Slider images={car.images} />
          <div className="w-full flex  flex-col md:flex-row md:justify-around mt-20 px-10">
            <div className="md:h-96 flex flex-col">
              <p className="text-4xl mb-5">
                {car.brand}, {car.name}
              </p>
              <div className="flex flex-col md:flex-row">
                <div className="flex flex-col shadow w-32 h-32 justify-center items-center">
                  <FaCalendar className="text-5xl" />
                  <p className="text-2xl font-light">{car.yearModel}</p>
                  <p>Year Model</p>
                </div>
                <div className="flex flex-col shadow w-32 h-32 justify-center items-center">
                  <FaGasPump className="text-5xl" />
                  <p className="text-2xl font-light">{car.fuelType}</p>
                  <p>Fuel type</p>
                </div>
                <div className="flex flex-col shadow w-32 h-32 justify-center items-center">
                  <MdAirlineSeatReclineExtra className="text-5xl" />
                  <p className="text-2xl font-light">{car.seatCapacity}</p>
                  <p>Seats</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <p className="text-4xl text-accent mb-5">{car.pricePerDay} $</p>
              <label htmlFor="fromdate">From Date</label>
              <input type="date" className="input input-bordered" />
              <label htmlFor="todate">To Date</label>
              <input type="date" className="input input-bordered" />
              <button className="btn btn-accent mt-5">Reserve</button>
            </div>
          </div>
        </>
      )}
      <Service />
      <Footer />
    </>
  )
}

export default CarDetails
