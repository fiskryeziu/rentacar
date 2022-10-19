import express, { json } from 'express'
import cors from 'cors'
import { config } from 'dotenv'
import connectDb from './db/connectDB.js'
import User from './models/userModel.js'

config()
connectDb()

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(json())

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`)
})
