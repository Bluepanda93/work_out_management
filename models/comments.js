const { Schema } = require('mongoose')

const Comments = new Schema(
  {
    name: { type: String, required: true },
    body: { type: Number, required: true }
  },
  { timestamps: true }
)

module.exports = Comments
