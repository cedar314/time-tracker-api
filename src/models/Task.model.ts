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

const Task = mongoose.model('Task', taskSchema)

export default Task
