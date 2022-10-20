import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
const { Schema } = mongoose

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { timestamps: true }
)
// userSchema.methods.showName = function () {
//   return this.name
// }

userSchema.methods.comparePasswords = async function (data) {
  return bcrypt.compare(data, this.password)
}

userSchema.pre('save', async function save(next) {
  let user = this
  // only hash the password if it has been modified (or is new)
  if (!user.isModified('password')) {
    return next()
  }
  try {
    const salt = await bcrypt.genSalt(10)
    this.passowrd = bcrypt.hash(this.password, salt)
    return next()
  } catch (error) {
    return next(err)
  }
})

const User = mongoose.model('User', userSchema)

const user = new User({ name: 'Fisnik' })

// const result = user.showName()
// console.log(result)

export default User
