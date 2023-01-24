import { v4 as uuidv4 } from 'uuid'
import { config } from 'dotenv'
import AWS from 'aws-sdk'
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3'

config()

export const s3Uploadv2 = async (files) => {
  const s3 = new AWS.S3()

  const params = files.map((file) => {
    return {
      Bucket: process.env.BUCKET_NAME,
      Key: `uploads/${uuidv4()}-file.originalname}`,
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
