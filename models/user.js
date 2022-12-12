const { Schema } = require('mongoose')

const User = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = User
