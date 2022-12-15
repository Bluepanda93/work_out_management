const mongoose = require('mongoose')
const UserSchema = require('./user')
const WorkoutSchema = require('./workout')
const CommentSchema = require('./comment')

const User = mongoose.model('User', UserSchema)
const Workout = mongoose.model('Workout', WorkoutSchema)
const Comment = mongoose.model('Comment', CommentSchema)

module.exports = {
  User,
  Workout,
  Comment
}
