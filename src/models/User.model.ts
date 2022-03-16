import mongoose, { Schema } from 'mongoose'
import { taskSchema, folderSchema } from './Task.model'
import { reminderSchema } from './Reminder.model'

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  tasks: [taskSchema],
  taskFolders: [folderSchema],
  reminders: [reminderSchema],
})

export const User = mongoose.model('User', userSchema)
