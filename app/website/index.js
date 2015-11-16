'use strict';

const express = require('express');
const expressHandleBar = require('express-handlebars');
const path = require('path');

const mainRoutes = require('./routes');

const app = express();

app.engine('handlebars', expressHandleBar({
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, '/views/layouts')
}));

app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, '/views'));

app.use('/', mainRoutes);

module.exports = app;
