'use strict';

const express = require('express');
const nunjucks = require('nunjucks');
const app = express();
const tweetBack = require('./tweetBank.js');
const routes = require('./routes');
var port = 3000;
// const people = [{name: 'Full'}, {name: 'Stacker'}, {name:'Son'}];


app.listen(port);
console.log(`App is running on ${port}`);

app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', {noCache: true});

app.use('/', routes);



// app.get('/', function(req, res, next){
// 	console.log(req.method, req.route.path);
// 	res.render('index', {title: 'Hall of Fame', people: people});
// 	next();
// });
//
// app.get('/', function(req, res){
// 	console.log(res.statusCode);
// });
//
// app.get('/news', function(req, res){
// 	console.log(res.statusCode);
// });
//


// var variables = {
// title: 'An Example',

// people: [
// { name: 'Gandalf'},
// { name: 'Frodo'},
// { name: 'Hermione'}
// ]
// };



// var res = nunjucks.render('index.html', variables, function(err, data){
// 	console.log(data);
// });
