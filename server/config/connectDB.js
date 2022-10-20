import mongoose from 'mongoose'

const connectDb = async () => {
  try {
    const connect = await mongoose.connect('mongodb://localhost:27017/car')
    console.log(`MongoDb server started: ${connect.connection.host}`)
  } catch (error) {
    console.error(`Error ${error.message}`)
  }
}

export default connectDb
