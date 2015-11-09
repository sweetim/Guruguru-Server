'use strict';

const express = require('express');
const router = express.Router();

const restaurantAPI = require('./api/restaurant');

router.use('/restaurant', restaurantAPI);

module.exports = router;
