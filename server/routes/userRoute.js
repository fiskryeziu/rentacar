import express from 'express'
import {
  getUserById,
  loginUser,
  registerUser,
  updateUserById,
} from '../controllers/userController.js'
import { admin, protect } from '../middlewares/authMiddleware.js'

const router = express.Router()

router.route('/register').post(registerUser)
router.route('/login').post(loginUser)
router.route('/profile').get(protect, getUserById)
router.route('/profile-update').put(protect, updateUserById)
router.route('/:id').put(protect, admin, updateUserById)

export default router
