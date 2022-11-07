import express from 'express'
import { stripePayment } from '../controllers/stripeController.js'
import { protect } from '../middlewares/authMiddleware.js'

const router = express.Router()

router.route('/payment').post(stripePayment)

export default router
