'use strict';

const express = require('express');
const router = express.Router();
const path = require('path');
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');
router.use('/', express.static(path.join(__dirname, '/../public')))

router.get('/', function (req, res, next) {
  let tweets = tweetBank.list();
  // res.render( 'index', { tweets: tweets.map(el => el.content) } );
  res.render( 'index', { tweets: tweets } );
  next();
});
// router.get('/stylesheets/style.css', function(req, res, next){
//   res.sendFile('style.css'));
// });


module.exports = router;
