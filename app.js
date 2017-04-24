const express = require('express');
const app = express();
// const volley = require('volleyball');
var port = 3000;

app.listen(port);
console.log(`App is running on ${port}`);

app.get('/', function(req, res, next){
	console.log(req.method, req.route.path);
	res.send('Hello my friend!');
	next();
});

app.get('/', function(req, res){
	console.log(res.statusCode);
});


app.get('/news', function(req, res){
	console.log(req.method, req.route.path);
	res.send('Welcome to the news');
});

app.get('/news', function(req, res){
	console.log(res.statusCode);
});
