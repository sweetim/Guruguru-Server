'use strict';

const ReactDOMServer = require('react-dom/server');
const express = require('express');
const router = express.Router();

const RestaurantPage = require('../components/restaurantPage');

router.get('/', (req, res) => {
    res.render('home');
});

router.get('/restaurant', (req, res) => {
    const content = ReactDOMServer.renderToString(RestaurantPage());

    res.render('layouts/main', {
        body: content
    });
});

module.exports = router;
