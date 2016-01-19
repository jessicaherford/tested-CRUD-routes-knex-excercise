var express = require('express');
var router = express.Router();

var knex = require('../db/knex');
/* Movies Routes Go Here. */


function movies(){
  // console.log('**********');
  // console.log(knex('restaurants'));
  // console.log(knex('food'));
  return knex('movies');
}

router.get('/', function (req, res, next) {
  movies().select().then(function(results){
  res.render('movies/index', {movies: results});
  });
})

router.get('/:movie_id/reviews', function (req, res, next) {
  movies().select().then(function(results){
  res.render('movies/show', {movies: results});
  });
})


router.get( '/:movie_id/reviews/new', function (req, res, next) {
  movies().select().then(function(results){
  res.render('movies/show', {movies: results});
  });
})


router.post( '/:movie_id/reviews', function (req, res, next) {
  movies().select().then(function(results){
  res.render('movies/show', {movies: results});
  });
})

router.get( '/:movie_id/reviews/:id', function (req, res, next) {
  movies().select().then(function(results){
  res.render('movies/show', {movies: results});
  });
})

router.get( '/:movie_id/reviews/:id/edit', function (req, res, next) {
  movies().select().then(function(results){
  res.render('movies/show', {movies: results});
  });
})

router.post( '/:movie_id/reviews/:id', function (req, res, next) {
  movies().select().then(function(results){
  res.render('movies/show', {movies: results});
  });
})

router.post( '/:movie_id/reviews/:id/delete', function (req, res, next) {
  movies().select().then(function(results){
  res.render('movies/show', {movies: results});
  });
})



module.exports = router;
