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
    required: true,
  },
  toDate: {
    type: Date,
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
