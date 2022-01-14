import loaders from './loaders'
import config from './config'
import express from 'express'

async function startServer() {
  const app = express()

  await loaders(app)

  app.listen(config.port, () => {
    console.log(`Your server is on ${config.port}`)
  })
}

startServer()
