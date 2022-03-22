import express, { Router } from 'express'
import { rename } from 'fs'
import { readUser, readAllUsers, createUser } from '../models/User.model'

const router = Router()

router.get('/', async (req, res) => {
  const user = await readAllUsers()
  res.json(user)
})

router.post('/', async (req, res) => {
  const newUser = await createUser(req.body.id, req.body.name)
  res.json(newUser)
})

export default router
