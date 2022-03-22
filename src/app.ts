import loaders from './loaders'
import config from './config'
import express from 'express'
import router from './controllers/User.controller'

async function startServer() {
  const app = express()

  await loaders(app)

  app.use('/', router)

  app.listen(config.port, () => {
    console.log(`Your server is on ${config.port}`)
  })
}

startServer()
