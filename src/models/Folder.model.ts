import mongoose, { Schema } from 'mongoose'
import { taskSchema } from './Task.model'

export const folderSchema = new Schema({
  name: {
    type: String,
    default: 'New folder',
  },
  description: {
    type: String,
    default: '',
  },
  children: [taskSchema],
})
