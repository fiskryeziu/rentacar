import express from 'express'
import {
  getAllCars,
  getCarById,
  getCars,
} from '../controllers/carController.js'
import { admin, protect } from '../middlewares/authMiddleware.js'

const route = express.Router()

route.route('/').get(getCars)
route.route('/admin').get(protect, getAllCars)
route.route('/:id').get(getCarById)

export default route
