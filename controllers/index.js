const { Workout } = require('../models')

const getAllWorkouts = async (req, res) => {
  try {
    const workouts = await Workout.find({})
    return res.status(200).json(workouts)
  } catch (e) {
    return res.status(500).json(e.message)
  }
}

module.exports = {
  getAllWorkouts
}
