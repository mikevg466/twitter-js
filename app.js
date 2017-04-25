'use strict';

const express = require('express');
const nunjucks = require('nunjucks');
const app = express();
const tweetBack = require('./tweetBank.js');
const routes = require('./routes');
var socketio = require('socket.io');
var port = 3000;

var server = app.listen(port);
console.log(`App is running on ${port}`);
var io = socketio.listen(server);

app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', {noCache: true});
app.use( '/', routes(io) );
