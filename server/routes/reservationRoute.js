import express from 'express'
import {
  createReservation,
  getAllReservations,
  approveReservation,
  deleteReservation,
} from '../controllers/reservationController.js'
import { protect } from '../middlewares/authMiddleware.js'

const router = express.Router()

router.route('/create').post(protect, createReservation)
router.route('/').get(protect, getAllReservations)
router
  .route('/:id')
  .put(protect, approveReservation)
  .delete(protect, deleteReservation)

export default router
