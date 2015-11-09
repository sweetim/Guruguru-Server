'use strict';

require('babel-core/register');

let express = require('express');
let bodyParser = require('body-parser');
let expressHandleBar = require('express-handlebars');

let config = require('./config/all');

let apiRoutes = require('./routes/api');
let mainRoutes = require('./routes/main');

let app = express();

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
    const port = server.address().port;

    console.log(`Server started in port ${port}`);
});
