const express = require('express');
const serveStatic = require('serve-static');
const history = require('connect-history-api-fallback');

let app = express();
app.use(history());
app.use(serveStatic(__dirname + '/dist'));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Expose-Headers", "X-My-Custom-Header, X-Another-Custom-Header");
    next(); // make sure we go to the next routes and don't stop here
});

const port = process.env.PORT || 5000;
app.listen(port);
