const express = require('express');
const serveStatic = require('serve-static');
const history = require('connect-history-api-fallback');

let app = express();
app.use(history());
app.use(serveStatic(__dirname + '/docs'));

const port = process.env.PORT || 5000;
app.listen(port);
console.log(`Server are running at: http://localhost:${port}`)
