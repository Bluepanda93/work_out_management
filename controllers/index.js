const { Workout, User } = require('../models')

const getAllWorkouts = async (req, res) => {
  try {
    const users = await Workout.find({})
    return res.status(200).json(users)
  } catch (e) {
    return res.status(500).json(e.message)
  }
}

const addNewWorkout = async (req, res) => {
  try {
    const workout = await new Workout(req.body)
    await workout.save()
    return res.status(201).json(workout)
  } catch (e) {
    return res.status(500).json(e.message)
  }
}

const getWorkoutById = async (req, res) => {
  try {
    const { id } = req.params
    const workout = await Workout.findById(id)
    return res.status(200).json(workout)
  } catch (e) {
    return res.status(500).json(e.message)
  }
}

const updateWorkoutById = async (req, res) => {
  try {
    const update = await Workout.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    res.status(200).json(update)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteWorkoutById = async (req, res) => {
  try {
    const { id } = req.params
    const workout = await Workout.findByIdAndDelete(id)
    return res.status(200).json(workout)
  } catch (e) {
    return res.status(500).json(e.message)
  }
}
const deleteUserById = async (req, res) => {
  try {
    const { id } = req.params
    const user = await User.findByIdAndDelete(id)
    return res.status(200).json(user)
  } catch (e) {
    return res.status(500).json(e.message)
  }
}

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({})
    return res.status(200).json(users)
  } catch (e) {
    return res.status(500).json(e.message)
  }
}

const addNewUser = async (req, res) => {
  try {
    const user = await new User(req.body)
    await user.save()
    return res.status(201).json(user)
  } catch (e) {
    return res.status(500).json(e.message)
  }
}

module.exports = {
  getAllWorkouts,
  addNewWorkout,
  getWorkoutById,
  deleteWorkoutById,
  getAllUsers,
  addNewUser,
  deleteUserById,
  updateWorkoutById
}
