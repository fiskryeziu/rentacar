import express, { json } from 'express'
import cors from 'cors'
import { config } from 'dotenv'
import connectDb from './config/connectDB.js'
import { notFound, errorHandler } from './middlewares/errorMiddleware.js'
import carRoute from './routes/carRoute.js'
import userRoute from './routes/userRoute.js'
import reservationRoute from './routes/reservationRoute.js'

config()
connectDb()

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(json())

//routes
app.use('/user', userRoute)
app.use('/cars', carRoute)
app.use('/reservation', reservationRoute)

app.use(notFound)
app.use(errorHandler)

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`)
})
