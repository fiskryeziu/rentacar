import React from 'react'
import CarItem from './CarItem'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getCars } from '../features/car/carSlice'
import Spinner from './Spinner'
import Alert from './Alert'

const CarLists = () => {
  const carsList = useSelector((state) => state.carsList)
  const { cars, loading, error } = carsList
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCars())
  }, [dispatch])
  if (loading) {
    return <Spinner />
  }
  return (
    <div className="flex flex-wrap gap-5 justify-center my-20 px-5">
      {error ? (
        <Alert variant="alert-error" message={error} />
      ) : (
        <>
          {cars.map((car) => (
            <CarItem car={car} key={car._id} />
          ))}
        </>
      )}
    </div>
  )
}

export default CarLists
