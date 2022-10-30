import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { getCars } from '../features/car/carSlice'

const Range = ({ min, max }) => {
  const [value, setValue] = useState(0)
  const dispatch = useDispatch()
  const params = useParams()

  const rangeValue = params.rangeValue || 0

  const navigate = useNavigate()
  useEffect(() => {
    dispatch(getCars(rangeValue))
  }, [dispatch, rangeValue])

  const filterHandler = () => {
    if (value.trim()) {
      navigate(`/cars/${value}`)
    } else {
      navigate('/')
    }
  }
  return (
    <div className="w-1/2 md:w-1/4 h-60 ml-3 flex flex-col justify-center">
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="range range-secondary"
        step="25"
      />
      <div className="flex justify-between">
        <p>{min}</p> <p>{value}</p>
      </div>

      <div className="flex justify-end">
        <button className="btn mt-4" onClick={filterHandler}>
          Search
        </button>
      </div>
    </div>
  )
}

export default Range
