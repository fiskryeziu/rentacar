import mongoose from 'mongoose'
import Car from '../models/carModel.js'

const getCars = async (req, res) => {
  try {
    const cars = await Car.find({})

    res.status(200).json(cars)
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'This cause does not exist',
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

export { getCars, getCarById }
