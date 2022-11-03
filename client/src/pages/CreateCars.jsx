import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import API from '../api/api'
import { resetCarDetails } from '../features/car/carDetailsSlice'
import { resetCarState } from '../features/car/carSlice'
import { FaCheckCircle, FaUpload } from 'react-icons/fa'
import { createCar, resetCarCreate } from '../features/car/carCreateSlice'

const CreateCars = () => {
  const [uploading, setUploading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    brand: '',
    pricePerDay: '',
    transmission: '',
    yearModel: '',
    seatCapacity: '',
    fuelType: '',
    images: [],
  })

  const {
    name,
    brand,
    pricePerDay,
    transmission,
    yearModel,
    seatCapacity,
    fuelType,
    images,
  } = formData
  const [files, setFiles] = useState([])

  const navigate = useNavigate()

  const dispatch = useDispatch()

  const carCreate = useSelector((state) => state.carCreate)
  const { success } = carCreate

  useEffect(() => {
    if (success) {
      dispatch(resetCarCreate())
      dispatch(resetCarState())
      dispatch(resetCarDetails())
      navigate('/admin/cars')
    }
  }, [dispatch, success, navigate])

  const uploadFileHandler = async () => {
    const MAX_LENGTH = 5
    if (Array.from(files).length > MAX_LENGTH) {
      alert(`Cannot upload files more than ${MAX_LENGTH}`)
      return
    }
    const formdata = new FormData()
    for (let i = 0; i < files.length; i++) {
      formdata.append('images', files[i])
    }
    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
      const { data } = await API.post('api/upload', formdata, config)

      setFormData((prev) => ({
        ...prev,
        images: data,
      }))
      setUploading(true)
    } catch (error) {
      setUploading(false)
      console.log(error)
    }
  }
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const submitHandler = (e) => {
    e.preventDefault()
    // dispatch create
    dispatch(
      createCar({
        name,
        brand,
        pricePerDay,
        transmission,
        yearModel,
        seatCapacity,
        fuelType,
        images,
      })
    )
  }

  return (
    <form
      className="form-control w-[300px] mx-auto mb-20"
      onSubmit={submitHandler}
    >
      <label htmlFor="name">Name</label>
      <input
        type="text"
        value={name}
        name="name"
        onChange={onChange}
        className="input input-bordered  w-full mb-6"
      />
      <label htmlFor="brand">Brand</label>
      <input
        type="text"
        name="brand"
        value={brand}
        onChange={onChange}
        className="input input-bordered w-full mb-6"
      />
      <label htmlFor="priceperday">Price per day</label>
      <input
        type="number"
        name="pricePerDay"
        value={pricePerDay}
        onChange={onChange}
        className="input input-bordered w-full mb-6"
      />
      <label htmlFor="transmission">Transmission</label>
      <input
        type="text"
        name="transmission"
        value={transmission}
        onChange={onChange}
        className="input input-bordered w-full mb-6"
      />
      <label htmlFor="yearmodel">Year Model</label>
      <input
        type="number"
        name="yearModel"
        value={yearModel}
        onChange={onChange}
        className="input input-bordered w-full mb-6"
      />
      <label htmlFor="seatcapacity">Seat Capacity</label>
      <input
        type="number"
        name="seatCapacity"
        value={seatCapacity}
        onChange={onChange}
        className="input input-bordered w-full mb-6"
      />
      <label htmlFor="fueltype">Fuel</label>
      <input
        type="text"
        name="fuelType"
        value={fuelType}
        onChange={onChange}
        className="input input-bordered w-full mb-6"
      />

      <label htmlFor="images">Images</label>
      <input
        type="file"
        name="images"
        accept="image/*"
        onChange={(e) => setFiles(e.target.files)}
        multiple
        className="file-input file-input-bordered file-input-accent w-full max-w-xs"
      />
      <div className="mt-2 flex row items-center">
        {uploading ? (
          <FaCheckCircle className="text-success text-3xl" />
        ) : (
          <p
            onClick={() => uploadFileHandler()}
            className="flex gap-2 items-center btn-sm btn-accent rounded-lg"
          >
            Upload images <FaUpload />
          </p>
        )}
      </div>

      <button className="btn mt-6">Send</button>
    </form>
  )
}

export default CreateCars
