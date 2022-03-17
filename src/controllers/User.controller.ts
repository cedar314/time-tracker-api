import express, { Router } from 'express'
import { readUser, createUser } from '../models/User.model'

const router = Router()

router.get('/', (req, res) => {
  if (typeof req.query.id === 'string') {
    const user = readUser(req.query.id)
  } else throw 'request query does not contain id of type string'
})

router.post('/', (req, res) => {
  console.log(req.body)
  createUser(req.body.id, req.body.name)
})

export default router
