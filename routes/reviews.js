var express = require('express');
var router = express.Router();

<<<<<<< HEAD
/* Movies Routes Go Here. */

router.get('/', function (req, res, next) {
  res.render('movies/index');
})

router.get('/:movie_id/reviews', function (req, res, next) {
  res.render('movies/show');
})

router.get('/:movie_id/reviews/new', function (req, res, next) {
  res.render('movies/show');
})

router.post('/:movie_id/reviews', function (req, res, next) {
  res.render('movies/show');
})

router.get('/:movie_id/reviews/:id', function (req, res, next) {
  res.render('movies/show');
})

router.get('/:movie_id/reviews/:id/edit', function (req, res, next) {
  res.render('movies/show');
})

router.post('/:movie_id/reviews/:id', function (req, res, next) {
  res.render('movies/show');
})

router.post('/:movie_id/reviews/:id/delete', function (req, res, next) {
  res.render('movies/show');
})


=======
var knex = require('../db/knex');
/* Movies Routes Go Here. */


function movies(){
  // console.log('**********');
  // console.log(knex('restaurants'));
  // console.log(knex('food'));
  return knex('movies');
}

function reviews(){
  // console.log('**********');
  // console.log(knex('restaurants'));
  // console.log(knex('food'));
  return knex('reviews');
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



>>>>>>> 8973db64949ed3a6af98b6cb55fdf6c30040d50e
module.exports = router;
