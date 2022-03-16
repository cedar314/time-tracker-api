import express from 'express'
import { mongo } from 'mongoose'
import expressLoader from './express'
import mongoLoader from './mongoose'

export default async (app: express.Application) => {
  await expressLoader(app)
  await mongoLoader()
  console.log('Loaded express.')
}
