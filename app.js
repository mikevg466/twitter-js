'use strict';

const express = require('express');
const nunjucks = require('nunjucks');
const app = express();
const tweetBack = require('./tweetBank.js');
const routes = require('./routes');
var port = 3000;

app.listen(port);
console.log(`App is running on ${port}`);

app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', {noCache: true});

app.use('/', routes);
