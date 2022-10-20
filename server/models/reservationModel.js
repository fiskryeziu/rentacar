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
    name: { type: String, required: true },
    image: { type: String, required: true },
    brand: { type: String, required: true },
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
  totalCost: {
    type: Number,
    required: true,
  },
})

const Reservation = mongoose.model('Reservation', reservationSchema)

export default Reservation
