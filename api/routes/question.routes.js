const Router = require('express')
const router = new Router()
const questionController = require('../controllers/question.controller')

router.post('/question', questionController.createQuestion)

module.exports = router
