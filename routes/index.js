var express = require('express');
var router = express.Router();

const controller = require('../controllers');

router.get('/sheets', controller.getSheets);
router.get('/sheet', controller.getSheet);

router.get('/columns', controller.getColumns);

router.get('/categories', controller.getCategories);

router.get('/commands', controller.getCommands);

module.exports = router;
