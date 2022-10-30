import User from '../models/userModel.js'
import generateToken from '../utils/generateToken.js'

const loginUser = async (req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({ email })
  if (user && (await user.comparePasswords(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      phoneNumber: user.phoneNumber,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    })
  } else {
    res.status(401).json({
      message: 'Invalid email or password!',
    })
  }
}

//users
const registerUser = async (req, res) => {
  try {
    const { name, email, password, phoneNumber } = req.body
    const userExist = await User.findOne({ email })

    if (userExist) {
      res.status(400)
      throw new Error('User already exist')
    }
    const user = await User.create({
      name,
      email,
      phoneNumber,
      password,
    })
    if (user) {
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        phoneNumber: user.phoneNumber,
        isAdmin: user.isAdmin,
        token: generateToken(user._id),
      })
    } else {
      res.status(400)
      throw new Error('Invalid user data')
    }
  } catch (error) {
    res.status(400)
    res.json({ message: error.message })
  }
}

//admin only
const getUserById = async (req, res) => {
  const user = await User.findById(req.user._id)
  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      phoneNumber: user.phoneNumber,
      isAdmin: user.isAdmin,
    })
  } else {
    res.status(404)
    throw new Error('User not found')
  }
}

//users
const updateUserById = async (req, res) => {
  const { email, password, phoneNumber } = req.body

  const user = await User.findById(req.user._id)

  if (user) {
    user.email = email || user.email
    user.phoneNumber = phoneNumber || user.phoneNumber

    if (password) {
      user.password = password || user.password
    }

    const updatedUser = await user.save()

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      phoneNumber: updatedUser.phoneNumber,
      isAdmin: updatedUser.isAdmin,
      token: generateToken(updatedUser._id),
    })
  } else {
    res.status(404)
    res.json({ message: 'Could not update user!' })
  }
}
//admin only
const updateUsersById = async (req, res) => {
  const { name, email, isAdmin, password } = req.body
  const { id } = req.params
  const user = await User.findById(id)
  if (user) {
    user.name = name || user.name
    user.email = email || user.email
    user.isAdmin = req.body.isAdmin

    const updatedUser = await user.save()

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
    })
  } else {
    res.status(404)
    throw new Error('Could not update user!')
  }
}

export { loginUser, getUserById, updateUserById, updateUsersById, registerUser }
