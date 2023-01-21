import multer from 'multer'
import { v4 as uuidv4 } from 'uuid'
import multerS3 from 'multer-s3'
import { config } from 'dotenv'
import AWS from 'aws-sdk'
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3'

config()

export const s3Uploadv2 = async (files) => {
  const s3 = new AWS.S3()

  const params = files.map((file) => {
    return {
      Bucket: process.env.BUCKET_NAME,
      Key: `uploads/${file.originalname}`,
      Body: file.buffer,
    }
  })

  return await Promise.all(params.map((param) => s3.upload(param).promise()))
}

export const s3Uploadv3 = async (files) => {
  const s3client = new S3Client()

  const params = files.map((file) => {
    return {
      Bucket: process.env.BUCKET_NAME,
      Key: `uploads/${uuidv4()}-${file.originalname}`,
      Body: file.buffer,
    }
  })

  return await Promise.all(
    params.map((param) => s3client.send(new PutObjectCommand(param)))
  )
}

// AWS.config.update({
//   region: process.env.AWS_REGION,
//   accessKeyId: process.env.AWS_ACCESS_KEY_ID,
//   secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
//   sessionToken: process.env.AWS_SESSION_TOKEN,
// })

// const upload = multer({
//   storage: multerS3({
//     acl: 'public-read',
//     s3,
//     bucket: 'cyclic-drab-ruby-cricket-robe-us-east-1',
//     metadata: function (req, file, cb) {
//       cb(null, { fieldName: file.fieldname })
//     },
//     key: function (req, file, cb) {
//       const fileName = file.originalname.toLowerCase().split(' ').join('-')
//       cb(null, uuidv4() + '-' + fileName)
//     },
//   }),
//   fileFilter: (req, file, cb) => {
//     if (
//       file.mimetype == 'image/png' ||
//       file.mimetype == 'image/jpg' ||
//       file.mimetype == 'image/jpeg'
//     ) {
//       cb(null, true)
//     } else {
//       cb(null, false)
//       return cb(new Error('Only .png, .jpg and .jpeg format allowed!'))
//     }
//   },
// })

//  const setImages = (req, res, next) => {
//   const uploadMulti = upload.array('images', 5)

//   uploadMulti(req, res, (err) => {
//     if (err)
//       return res.status(400).json({ success: false, message: err.message })

//     console.log(req.file)
//   })

//   res.status(200).json({ data: req.files })
// }

// export default upload
