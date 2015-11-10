'use strict';

require('babel-core/register');

const express = require('express');
const bodyParser = require('body-parser');
const expressHandleBar = require('express-handlebars');

const config = require('./config/all');

const apiRoutes = require('./routes/api');
const mainRoutes = require('./routes/main');

const app = express();

app.engine('handlebars', expressHandleBar({
    defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', mainRoutes);
app.use('/api', apiRoutes);

const server = app.listen(config.port, () => {
    // const port = server.address().port;
    //
    // console.log(`Server started in port ${port}`);
});

module.exports = server;
