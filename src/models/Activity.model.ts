import mongoose, { Schema } from 'mongoose'

const activitySchema = new Schema({
  task: mongoose.Types.ObjectId,
  start: Date,
  end: Date,
})

const Activity = mongoose.model('Activity', activitySchema)
export default Activity
