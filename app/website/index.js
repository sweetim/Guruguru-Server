'use strict';

const express = require('express');
const expressHandleBar = require('express-handlebars');

const mainRoutes = require('./routes');

const app = express();

app.engine('handlebars', expressHandleBar({
    defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');

app.use('/', mainRoutes);

module.exports = app;
