const { Router } = require('express')
const router = Router()
const controllers = require('../controllers/index')

router.get('/', (req, res) => res.send('This is root!'))

router.get('/work-outs', controllers.getAllWorkouts)

router.post('/add/work-out', controllers.addNewWorkout)

router.get('/work-out/:id', controllers.getWorkoutById)

router.get('/users', controllers.getAllUsers)

router.post('/add/user', controllers.addNewUser)

module.exports = router
