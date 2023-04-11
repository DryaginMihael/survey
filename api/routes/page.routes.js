const Router = require('express')
const router = new Router()
const pageController = require('../controllers/page.controller')

router.post('/page', pageController.createPage)

module.exports = router
