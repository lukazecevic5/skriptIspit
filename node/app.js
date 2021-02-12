const express = require('express');
const app = express();
const api = require('./routes/Routes');
const mysql = require('mysql');
let port = process.env.PORT | 8080;
const history = require('connect-history-api-fallback');
const path = require('path');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET", "PUT", "POST", "DELETE", "OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.use('/api', api);


const staticMiddleware = express.static(path.join(__dirname, 'dist'));



app.use(staticMiddleware);
app.use(history());
app.use(staticMiddleware);

app.listen(port);


