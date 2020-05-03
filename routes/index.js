const express = require('express')

const router = express.Router()
const controller = require('../controllers')

router.get('/sheets', controller.getSheets)
router.get('/sheet', controller.getSheet)
// router.post('/sheet');

module.exports = router
