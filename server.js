'use stict';

let express = require('express');

let app = express();

app.set('port') = process.env.PORT || 3000;


const server = app.listen(app.get('port'), () => {
    const port = server.address().port;

    console.log(`Server started in port ${port}`);
});
