var express = require('express');
var router = express.Router();

var knex = require('../db/knex');
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



module.exports = router;
