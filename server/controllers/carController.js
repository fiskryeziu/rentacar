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

export { getCars, getCarById, getAllCars, deleteCarById }
