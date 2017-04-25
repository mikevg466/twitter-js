const express = require('express');
const nunjucks = require('nunjucks');
const app = express();
// const volley = require('volleyball');
var port = 3000;
const people = [{name: 'Full'}, {name: 'Stacker'}, {name:'Son'}, {name: 'Jeremy'}, {name: 'Mike'}];


app.listen(port);
console.log(`App is running on ${port}`);

app.get('/', function(req, res, next){
	console.log(req.method, req.route.path);
	res.render('index', {title: 'Hell of Shame', people: people});
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

app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', {noCache: true});

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


