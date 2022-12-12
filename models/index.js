const mongoose = require('mongoose')
const UserSchema = require('./user')
const WorkoutSchema = require('./workout')

const User = mongoose.model('User', UserSchema)
const Workout = mongoose.model('Workout', WorkoutSchema)

module.exports = {
  User,
  Workout
}
