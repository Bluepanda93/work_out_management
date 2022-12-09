const { Schema } = require('mongoose')

const Ride = new Schema(
  {
    exercise: { type: String, required: true },
    numberOfSets: { type: String, required: true },
    themeParkId: { type: Schema.Types.ObjectId, ref: 'ThemePark' }
  },
  { timestamps: true }
)

module.exports = Ride
