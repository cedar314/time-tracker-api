import mongoose, { Schema } from 'mongoose'

export const reminderSchema = new Schema({
  name: {
    type: String,
    default: 'New reminder',
  },
  description: {
    type: String,
    default: '',
  },
  isActive: {
    type: Boolean,
    default: false,
  },
  isStarted: {
    type: Boolean,
    default: false,
  },
  time: {
    type: Date,
    required: true,
  },
  timeline: [Date],
})
