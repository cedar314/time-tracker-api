import express from 'express'
import mongoose, { Schema } from 'mongoose'
import { taskSchema } from './Task.model'
import { folderSchema } from './Folder.model'
import { reminderSchema } from './Reminder.model'

export const userSchema = new Schema({
  _id: String,
  name: {
    type: String,
    required: true,
  },
  tasks: [taskSchema],
  taskFolders: [folderSchema],
  reminders: [reminderSchema],
})

const User = mongoose.model('User', userSchema)

export function createUser(id: string, name: string) {
  User.create({
    _id: id,
    name: name,
    tasks: [],
    taskFolder: [],
    reminders: [],
  })
}

export async function readUser(id: string) {
  const user = await User.find()
  console.log(user)
  return user
}

export default User
