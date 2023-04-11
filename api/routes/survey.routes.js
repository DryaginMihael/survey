const Router = require('express')
const router = new Router()
const surveyController = require('../controllers/survey.controller')

router.post('/survey', surveyController.createSurvey)
router.get('/survey', surveyController.getSurveys)
router.get('/survey/:id', surveyController.getOneSurvey)
router.put('/survey', surveyController.updateSurvey)
router.delete('/survey/:id', surveyController.deleteSurvey)

module.exports = router
