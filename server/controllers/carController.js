import mongoose from 'mongoose'
import Car from '../models/carModel.js'

const getCars = async (req, res) => {
  const rangeValue = +req.query.rangeValue || 0
  try {
    const cars = await Car.find({}).where('pricePerDay').gte(rangeValue)
    res.status(200).json(cars)
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: err.message,
    })
  }
}
const getCarById = async (req, res) => {
  const car = await Car.findById(req.params.id)
  if (car) {
    res.status(200).json(car)
  } else {
    res.status(500).json({ message: 'car not found' })
  }
}

//admin
const getAllCars = async (req, res) => {
  try {
    const cars = await Car.find({})
    res.status(200).json(cars)
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: err.message,
    })
  }
}
//admin
const deleteCarById = async (req, res) => {
  const { id } = req.params
  console.log(id)
  try {
    const car = await Car.findById(id)
    if (car) {
      await car.remove()
      res.status(200).json('Car deleted')
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: err.message,
    })
  }
}
const updateCarById = async (req, res) => {
  const {
    name,
    brand,
    pricePerDay,
    transmission,
    yearModel,
    seatCapacity,
    fuelType,
    images,
  } = req.body

  const { id } = req.params

  const car = await Car.findById(id)

  if (car) {
    ;(car.name = name || car.name),
      (car.brand = brand || car.brand),
      (car.pricePerDay = pricePerDay || car.pricePerDay),
      (car.transmission = transmission || car.transmission),
      (car.yearModel = yearModel || car.yearModel),
      (car.seatCapacity = seatCapacity || car.seatCapacity),
      (car.fuelType = fuelType || car.fuelType),
      (car.images = images || car.images)

    const updatedCar = await car.save()

    res.json({
      _id: updatedCar._id,
      name: updatedCar.name,
      brand: updatedCar.brand,
      pricePerDay: updatedCar.pricePerDay,
      transmission: updatedCar.transmission,
      yearModel: updatedCar.yearModel,
      seatCapacity: updatedCar.seatCapacity,
      fuelType: updatedCar.fuelType,
      images: updatedCar.images,
    })
  } else {
    res.status(404)
    throw new Error('Could not update user!')
  }
}

export { getCars, getCarById, getAllCars, deleteCarById, updateCarById }
