import express from 'express'
import { getUserById, loginUser } from '../controllers/userController.js'
import { protect } from '../middlewares/authMiddleware.js'

const router = express.Router()

router.route('/profile').get(protect, getUserById)
router.route('/login').post(loginUser)

export default router
