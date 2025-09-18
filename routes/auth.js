const { getLoginPage } = require('../controllers/auth/auth')

const router = require('express').Router()

router
    .route('/login')
    .get(getLoginPage)


module.exports = router


