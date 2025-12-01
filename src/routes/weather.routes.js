const express = require('express');
const controller = require('../controllers/weather.controller');
const router = express.Router();

router.get('/', controller.getByCity); // /api/weather?city=Palangkaraya

module.exports = router;