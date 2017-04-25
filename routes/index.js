'use strict';

const express = require('express');
const router = express.Router();
const path = require('path');
const bodyParser = require('body-parser')
const tweetBank = require('../tweetBank');
router.use('/', express.static(path.join(__dirname, '/../public')))
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());


router.get('/', function (req, res, next) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets, showForm: true }  );
  next();
});

router.get('/users/:name', function(req, res, next){
 var name = req.params.name;
 var list = tweetBank.find({name: name});
 res.render('index', {tweets: list, showForm: true, name: req.params.name});
});

router.get('/tweets/:tweetid', function(req, res, next){
 var tid = req.params.tweetid;
 var list = tweetBank.find({index: tid});
 res.render('index', {tweets: list});
});

router.post('/tweets', function(req, res) {
	var name = req.body.name;
	var text = req.body.text;
	tweetBank.add(name, text);
	res.redirect('/');
});


module.exports = router;
