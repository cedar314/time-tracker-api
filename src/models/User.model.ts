import mongoose, { Schema } from 'mongoose'

const taskSchema = new Schema({
  name: String,
  description: String,
  color: String,
  icon: String,
})

const userSchema = new Schema({
  name: String,
  email: {
    type: String,
    required: true,
    lowercase: true,
  },
  task: [taskSchema],
})

const User = mongoose.model('User', userSchema)

export default User
