'use strict';

let express = require('express');
let bodyParser = require('body-parser');
let expressHandleBar = require('express-handlebars');

let config = require('./config/all');
let apiRouter = require('./routes/api');

let app = express();

app.engine('handlebars', expressHandleBar({
    defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/restaurant', (req, res) => {
    res.render('restaurant');
})

app.use('/api', apiRouter);

const server = app.listen(config.port, () => {
    const port = server.address().port;

    console.log(`Server started in port ${port}`);
});
