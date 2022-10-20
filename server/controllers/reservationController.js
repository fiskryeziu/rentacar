import mongoose from 'mongoose'
import Reservation from '../models/reservationModel.js'
import Car from '../models/carModel.js'

const createReservation = async (req, res) => {
  const carId = '6351b4b0aca70329f9716df3'
  const { fromDate, toDate, isApproved } = req.body

  const car = await Car.findById(carId)
  if (car) {
    console.log(car)
    const reservationItem = {
      car: carId,
      name: car.name,
      image: car.images[0],
      brand: car.brand,
    }
    if (reservationItem && reservationItem === 0) {
      res.status(400)
      res.json({ message: 'No order items' })
    } else {
      const reservation = new Reservation({
        reservationItem,
        user: req.user._id,
        fromDate,
        toDate,
        isApproved,
        totalCost: 1000,
      })
      const createdReservation = await reservation.save()

      res.status(200).json(createdReservation)
    }
  }
}

//admin only
const getAllReservations = async (req, res) => {
  const reservation = await Reservation.find({})
  if (reservation && reservation.length > 0) {
    res.json(reservation)
  } else {
    res.json({ message: 'No reservation' })
  }
}

//admin only
const approveReservation = async (req, res) => {
  const { id } = req.params
  const reservation = await Reservation.findById(id)
  console.log(reservation)
  if (reservation) {
    reservation.isApproved = true
    await reservation.save()
    res.status(200).json('Reservation approved')
  } else {
    res.status(400).json({ message: 'Cannot be approved' })
  }
}

//admin only
const deleteReservation = async (req, res) => {
  const { id } = req.params
  const reservation = await Reservation.findById(id)
  if (reservation) {
    await reservation.remove()
    res.status(200).json('Reservation deleted')
  } else {
    res.status(400).json({ message: 'Could not delete!' })
  }
}

export {
  createReservation,
  getAllReservations,
  approveReservation,
  deleteReservation,
}
