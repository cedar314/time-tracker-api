import express, { Router } from 'express'
import { rename } from 'fs'
import { readUser, readAllUsers, createUser } from '../models/User.model'

const router = Router()

router.get('/', async (req, res) => {
  if (typeof req.query.user === 'string') {
    const user = await readUser(req.query.user)
    res.json(user)
    return
  }
  res.json(await readAllUsers())
})

router.post('/', async (req, res) => {
  const newUser = await createUser(req.body.id, req.body.name)
  res.json(newUser)
})

export default router
