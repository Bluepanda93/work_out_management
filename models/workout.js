const { Schema } = require('mongoose')

const Workout = new Schema(
  {
    exercise: { type: String, required: true },
    numberOfSets: { type: Number, required: true },
    numberOfReps: { type: Number, required: true },
    userId: { type: Schema.Types.ObjectId, ref: 'User' }
  },
  { timestamps: true }
)

module.exports = Workout
