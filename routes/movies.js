var express = require('express');
var router = express.Router();

var knex = require('../db/knex');
/* Movies Routes Go Here. */

<<<<<<< HEAD
var knex = require('../db/knex');

=======
>>>>>>> 8973db64949ed3a6af98b6cb55fdf6c30040d50e

function movies(){
  // console.log('**********');
  // console.log(knex('restaurants'));
  // console.log(knex('food'));
  return knex('movies');
}

<<<<<<< HEAD
function Reviews(){
  return knex('reviews');
}

=======
function reviews(){
  // console.log('**********');
  // console.log(knex('restaurants'));
  // console.log(knex('food'));
  return knex('reviews');
}


>>>>>>> 8973db64949ed3a6af98b6cb55fdf6c30040d50e
router.get('/', function (req, res, next) {
  movies().select().then(function(results){
  res.render('movies/index', {movies: results});
  });
})

router.get('/new', function (req, res, next) {
  movies().select().then(function(results){
  res.render('movies/new', {movies: results});
  });
})

router.post( '/', function (req, res, next) {
  movies().select().then(function(results){
  res.render('movies/show', {movies: results});
  });
})

router.get('/new', function (req, res, next) {
  movies().select().then(function(results){
  res.render('movies/new', {movies: results});
  });
})


<<<<<<< HEAD
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

=======
router.get('/:id', function (req, res, next) {
  movies().select().then(function(results){
  res.render('movies/new', {movies: results});
  });
})

router.get('/:id/edit', function (req, res, next) {
  movies().select().then(function(results){
  res.render('movies/new', {movies: results});
  });
})

router.post('/:id', function (req, res, next) {
  movies().select().then(function(results){
  res.render('movies/new', {movies: results});
  });
})

router.post('/:id/delete', function (req, res, next) {
  movies().select().then(function(results){
  res.render('movies/new', {movies: results});
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
