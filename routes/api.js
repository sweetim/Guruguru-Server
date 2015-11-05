'use strict';

let express = require('express');
let router = express.Router();

let restaurantAPI = require('./api/restaurant');

router.use('/restaurant', restaurantAPI);


module.exports = router;
