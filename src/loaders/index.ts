import express from 'express'
import { mongo } from 'mongoose'
import expressLoader from './express'
import mongoLoader from './mongoose'

export default async (app: express.Application) => {
  await expressLoader(app)
  console.log('Loaded express.')
  await mongoLoader()
  console.log('Loaded mongoDB.')
}
