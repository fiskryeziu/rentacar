import mongoose from 'mongoose'
import Car from '../models/carModel.js'

const getCars = async (req, res) => {
  const rangeValue = +req.query.rangeValue || 0
  const page = +req.query.page || 1
  const carLimit = 2

  try {
    const cars = await Car.find({})
      .limit(carLimit)
      .where('pricePerDay')
      .skip(carLimit * (page - 1))
      .gte(rangeValue)

    const carCount = await Car.countDocuments()
    res.status(200).json({
      cars,
      page,
      pages: Math.ceil(carCount / carLimit),
    })
  } catch (error) {
    res.status(500).json({
      errorMsg: 'Something went wrong',
      message: error.message,
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

const createCar = async (req, res) => {
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
  const car = new Car({
    user: req.user._id,
    name,
    brand,
    pricePerDay,
    transmission,
    yearModel,
    seatCapacity,
    fuelType,
    images,
  })

  const createdCar = await car.save()

  res.status(201).json(createdCar)
}

export {
  getCars,
  getCarById,
  getAllCars,
  deleteCarById,
  updateCarById,
  createCar,
}
