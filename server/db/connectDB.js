import mongoose from 'mongoose'

const connectDb = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/car')
    console.log(`MongoDb server started: ${conn.connection.host}`)
  } catch (error) {
    console.error(`Error ${error.message}`)
  }
}

export default connectDb
