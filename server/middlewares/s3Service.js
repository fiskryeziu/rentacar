import { v4 as uuidv4 } from 'uuid'
import { config } from 'dotenv'
import AWS from 'aws-sdk'

config()

export const s3Uploadv2 = async (files) => {
  const s3 = new AWS.S3()

  const params = files.map((file) => {
    return {
      Bucket: process.env.BUCKET_NAME,
      Key: `uploads/${uuidv4()}-${file.originalname}`,
      Body: file.buffer,
    }
  })

  return await Promise.all(params.map((param) => s3.upload(param).promise()))
}

//we'll need this
// filenameToRemove = removedTodo.imageURL.split('/').slice(-1)[0];

export const s3Delete = async (images) => {
  const s3 = new AWS.S3()
  let getKeys = images.map((image) => {
    return {
      Key: image.split('/').slice(3).join('/'),
    }
  })
  var params = {
    Bucket: process.env.BUCKET_NAME,
    Delete: {
      Objects: getKeys,
      Quiet: false,
    },
  }
  s3.deleteObjects(params, function (err, data) {
    if (err) console.log(err, err.stack)
    else console.log(data)
  })
}
