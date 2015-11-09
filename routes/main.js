'use strict';

let ReactDOMServer = require('react-dom/server');
let express = require('express');
let router = express.Router();

let RestaurantPage = require('../components/restaurantPage');

router.get('/', (req, res) => {
    res.render('home');
});

router.get('/restaurant', (req, res) => {
    let content = ReactDOMServer.renderToString(RestaurantPage());

    res.render('layouts/main', {
        body: content
    });
});

module.exports = router;
