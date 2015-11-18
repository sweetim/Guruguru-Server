'use strict';

const ReactDOMServer = require('react-dom/server');
const React = require('react');
const express = require('express');
const content = require('../content/en');

const router = express.Router();

const MainPage = React.createFactory(require('../components/main'));

router.get('/', (req, res) => {
    const markup = ReactDOMServer.renderToStaticMarkup(MainPage(content.mainPage));

    res.render('main', {
        body: markup
    });
});

router.get('/restaurant', (req, res) => {
    const markup = ReactDOMServer.renderToStaticMarkup(MainPage(content.mainPage));

    res.render('main', {
        body: markup
    });
});

module.exports = router;
