var express = require('express');
var router = express.Router();

/* Movies Routes Go Here. */

var knex = require('../db/knex');


function movies(){
  // console.log('**********');
  // console.log(knex('restaurants'));
  // console.log(knex('food'));
  return knex('movies');
}

function Reviews(){
  return knex('reviews');
}

router.get('/', function (req, res, next) {
  res.render('movies/index');
})


router.get('/new', function (req, res, next) {
  res.render('movies/new');
})

router.post('/', function (req, res, next) {
  res.render('movies/show');
})

router.get('/:id', function(req, res, next){
  res.render('movies/show');
})

router.get('/:id/edit', function(req, res, next){
  res.render('movies/show');
})

router.post('/:id', function (req, res, next) {
  res.render('movies/show');
})

router.post('/:id/delete', function (req, res, next) {
  res.render('movies/show');
})

module.exports = router;
