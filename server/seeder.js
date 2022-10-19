import mongoose from 'mongoose'
import dotenv from 'dotenv'
import users from './data/users.js'
import cars from './data/cars.js'
import User from './models/userModel.js'
import Car from './models/carModel.js'
import Reservation from './models/reservationModel.js'
import connectDB from './config/db.js'

dotenv.config()

connectDB()

const importData = async () => {
  try {
    await Order.deleteMany()
    await Car.deleteMany()
    await Reservation.deleteMany()

    const createdUsers = await User.insertMany(users)

    const adminUser = createdUsers[0]._id

    const sampleData = cars.map((car) => {
      return { ...car, user: adminUser }
    })

    await Car.insertMany(sampleProducts)

    console.log('Data imported')
    process.exit()
  } catch (error) {
    console.error(`${error}`)
    process.exit(1)
  }
}

const destroyData = async () => {
  try {
    await Reservation.deleteMany()
    await Car.deleteMany()
    await User.deleteMany()

    console.log('Data Destroyed!')
    process.exit()
  } catch (error) {
    console.error(`${error}`)
    process.exit(1)
  }
}

if (process.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}
