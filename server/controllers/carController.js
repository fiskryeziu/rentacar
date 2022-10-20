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
  try {
    const car = await Car.findById(req.params.id)
    res.status(200).json(car)
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'This cause does not exist',
      error: err.message,
    })
  }
}

export { getCars, getCarById }
