import express from 'express'
import { getCars } from '../controllers/carController.js'

const route = express.Router()

route.route('/').get(getCars)

export default route
