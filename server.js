const express = require('express');
const serveStatic = require('serve-static');
const history = require('connect-history-api-fallback');
var cors = require('cors');

let app = express();
app.use(history());
app.use(serveStatic(__dirname + '/dist'));

app.use(cors());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Authorization");
    res.header("Content-Type", "application/json");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});

const port = process.env.PORT || 5000;
app.listen(port);
