const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');

router.get('/fetch-data', controller.get_fetchData);

router.get('/get-data', controller.get_GetData);

router.get('/', controller.get_dashboard);

module.exports = router;
