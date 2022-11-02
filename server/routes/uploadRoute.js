import path from 'path'
import express from 'express'
import multer from 'multer'
const router = express.Router()
import { v4 as uuidv4 } from 'uuid'

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads')
  },
  filename: (req, file, cb) => {
    const fileName = file.originalname.toLowerCase().split(' ').join('-')
    cb(null, uuidv4() + '-' + fileName)
  },
})
const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype == 'image/png' ||
      file.mimetype == 'image/jpg' ||
      file.mimetype == 'image/jpeg'
    ) {
      cb(null, true)
    } else {
      cb(null, false)
      return cb(new Error('Only .png, .jpg and .jpeg format allowed!'))
    }
  },
})

router.post('/', upload.array('images', 5), (req, res) => {
  // console.log(req.files[0])
  function getPath() {
    let path = []

    const url = req.protocol + '://' + req.get('host')
    for (let file of req.files) {
      path.push(`${url}/uploads/${file.filename}`)
    }
    return path
  }
  res.send(getPath())
})

export default router
