import express from 'express'
import { getCarById, getCars } from '../controllers/carController.js'

const route = express.Router()

route.route('/').get(getCars)
route.route('/:id').get(getCarById)

export default route
