const { Router } = require('express')
const router = Router()
const controllers = require('../controllers/index')

router.get('/', (req, res) => res.send('This is root!'))

router.get('/work-outs', controllers.getAllWorkouts)

router.post('/add/work-out', controllers.addNewWorkout)

router.get('/work-out/:id', controllers.getWorkoutById)

router.put('/work-out/:id', controllers.updateWorkoutById)

router.delete('/work-out/:id', controllers.deleteWorkoutById)

router.delete('/user/:id', controllers.deleteWorkoutById)

router.get('/users', controllers.getAllUsers)

router.post('/add/user', controllers.addNewUser)

module.exports = router
