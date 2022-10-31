import express from 'express'
import {
  createReservation,
  getAllReservations,
  approveReservation,
  deleteReservation,
  getReservationsById,
} from '../controllers/reservationController.js'
import { admin, protect } from '../middlewares/authMiddleware.js'

const router = express.Router()

router.route('/create').post(protect, createReservation)
router.route('/').get(protect, getReservationsById)
router.route('/admin').get(protect, admin, getAllReservations)

router
  .route('/:id')
  .put(protect, approveReservation)
  .delete(protect, deleteReservation)

export default router
