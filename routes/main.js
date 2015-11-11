'use strict';

const ReactDOMServer = require('react-dom/server');
const React = require('react');
const express = require('express');
const router = express.Router();

const RestaurantPage = React.createFactory(require('../components/restaurantPage'));

router.get('/', (req, res) => {
    res.render('home');
});

router.get('/restaurant', (req, res) => {
    const content = {
        title: 'Why guruguru?',
        description: 'There are so many benifits using our services, and we promise that once you tried it you will never leave without it',
        features: [
            {
                title: 'Eating Behaviour',
                description: 'We will learn about your eating behaviour and provide you with suggest the best food and restaurant for you',
                image: 'img/behaviour.png'
            },
            {
                title: 'Reward',
                description: 'Check in every restaurant you eat, to get additional rewards from the restaurant',
                image: 'img/reward.png'
            },
            {
                title: 'Analytics',
                description: 'We will learn about your eating behaviour whenever you order food using our services',
                image: 'img/analytics.png'
            }
        ]
    };


    const markup = ReactDOMServer.renderToStaticMarkup(RestaurantPage(content));

    res.render('layouts/main', {
        body: markup
    });
});

module.exports = router;
