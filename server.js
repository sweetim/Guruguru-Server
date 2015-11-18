'use strict';

require('babel-core/register');

const express = require('express');
const compression = require('compression');
const debug = require('debug')('main:server');

const config = require('./config/all');
const apiApp = require('./app/api');
const websiteApp = require('./app/website');

const app = express();

app.use(compression());
app.use(express.static('public'));

app.use('/', websiteApp);
app.use('/api', apiApp);

const server = app.listen(config.port, () => {
    const host = server.address().address;
    const port = server.address().port;

    debug(`Server started at http://${host}:${port}`);
});

module.exports = server;
