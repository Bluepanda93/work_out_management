const { Router } = require('express')
const router = Router()
const controllers = require('../controllers/index')

router.get('/work-outs', controllers.getAllWorkouts)

module.exports = router
