import mongoose, { Schema } from 'mongoose'

const historySchema = new Schema({
  history: [mongoose.Types.ObjectId], //Activity
})

const History = mongoose.model('History', historySchema)
export default History
