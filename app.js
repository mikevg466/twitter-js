const express = require('express');
const app = express();
var port = 3000;

app.listen(port);
console.log(`App is running on ${port}`);

app.get('/', function(req,res){
	console.log(res.send.toString());
	res.send('Hello my friend!');
});


app.get('/news', function(req,res){
	res.send('Welcome to the news');
});
