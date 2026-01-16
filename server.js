const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const mongodb = require('./data/database');

app.use('/', require('./routes')); 

mongodb.initDb((err) => {
    if(err) {
        console.log(err);
    }
    else {
        app.listen(port, () => {
            console.log(`Database is listening and node running at port ${port}`);
        });
    }
})

