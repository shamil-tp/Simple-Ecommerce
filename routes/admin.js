const { adminDashboard } = require('../controllers/admin/admin')

const router = require('express').Router()

router
    .route('/')
    .get(adminDashboard)

module.exports = router