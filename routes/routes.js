const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');

router.get('/fetch-data', controller.getfetchData);

router.get('/get-data', controller.getGetData);

module.exports = router;
