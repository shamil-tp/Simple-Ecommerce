const { adminLoginPage, adminLogin, adminLogout } = require('../controllers/auth/auth')

const router = require('express').Router()

router
    .route('/admin/login')
    .get(adminLoginPage)
    .post(adminLogin)
router
    .route('/admin/logout')
    .get(adminLogout)


module.exports = router


