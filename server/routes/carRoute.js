import express from 'express'
import {
  deleteCarById,
  getAllCars,
  getCarById,
  getCars,
} from '../controllers/carController.js'
import { admin, protect } from '../middlewares/authMiddleware.js'

const route = express.Router()

route.route('/').get(getCars)
route.route('/admin').get(protect, admin, getAllCars)

route.route('/admin/:id').delete(protect, admin, deleteCarById)
route.route('/:id').get(getCarById)

export default route
