import express from 'express'
import cors from 'cors'

export default async (app: express.Application) => {
  app.get('/status', (req, res) => {
    res.status(200).end()
  })
  app.use(cors(options))
  app.use(express.json())
  app.use(express.urlencoded({ extended: false }))
  return app
}

const allowedOrigins = ['http://localhost:3000']

const options: cors.CorsOptions = {
  origin: allowedOrigins,
}
