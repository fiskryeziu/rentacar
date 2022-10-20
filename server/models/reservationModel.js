import mongoose from 'mongoose'

const { Schema } = mongoose

const reservationSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  reservationItem: {
    car: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Car',
    },
  },
  fromDate: {
    type: Date,
    validate: function (input) {
      return typeof new Date(input) === 'date' && new Date(input) >= new Date()
    },
    required: true,
    message: (input) =>
      `${input} must be greater than or equal to the current date!`,
  },
  toDate: {
    type: Date,
    validate: function (input) {
      let date = new Date() // Now
      date.setDate(date.getDate() + 30) // Set now + 30 days as the new date
      return typeof new Date(input) === 'date' && new Date(input) <= date
    },
    message: () => `Maximum of rent it's only 1 month`,
    required: true,
  },
  isApproved: {
    type: Boolean,
    required: true,
    default: false,
  },
  isReserved: {
    type: Boolean,
    required: true,
    default: true,
  },
})

const Reservation = mongoose.model('Reservation', reservationSchema)

export default Reservation
