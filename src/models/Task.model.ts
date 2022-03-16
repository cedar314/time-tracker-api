import mongoose, { Schema } from 'mongoose'

export const taskSchema = new Schema({
  name: {
    type: String,
    default: 'New task',
  },
  description: {
    type: String,
    default: '',
  },
  isActive: {
    type: Boolean,
    default: false,
  },
  timeline: [Date],
})

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

export const Task = mongoose.model('Task', taskSchema)
export const Folder = mongoose.model('Folder', folderSchema)
