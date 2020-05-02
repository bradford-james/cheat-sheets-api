const express = require('express');
const router = express.Router();
const cors = require('cors');
const controller = require('../controllers');

const whitelist = ['https://nostalgic-pasteur-f4a6fb.netlify.app'];
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not Allowed by CORS'));
    }
  },
};

router.get('/sheets', controller.getSheets);
router.get('/sheet', controller.getSheet);
// router.post('/sheet');

module.exports = router;
