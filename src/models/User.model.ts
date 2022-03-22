import express from 'express'
import mongoose, { Schema } from 'mongoose'
import { taskSchema } from './Task.model'
import { folderSchema } from './Folder.model'
import { reminderSchema } from './Reminder.model'
import { syncBuiltinESMExports } from 'module'

export const userSchema = new Schema({
  _id: String,
  name: {
    type: String,
    required: true,
  },
  taskFolders: [folderSchema],
  reminders: [reminderSchema],
})

const User = mongoose.model('User', userSchema)

export async function createUser(id: string, name: string) {
  const newUser = User.create({
    _id: id,
    name: name,
    taskFolders: [
      {
        name: '_index',
        description: '',
        children: [
          {
            name: 'Sleep',
          },
          {
            name: 'Eat',
          },
        ],
      },
      {
        name: 'Study (Example folder)',
        description: 'University subjects',
        children: [
          {
            name: 'Math',
            description: 'Algebra',
          },
          {
            name: 'Physics',
            description: 'Stringy theory',
          },
        ],
      },
    ],
    reminders: [],
  })
  return newUser
}

export async function readAllUsers() {
  const user = await User.find()
  return user
}

export async function readUser(id: string) {
  const user = await User.findById(id)
  return user
}

export default User
