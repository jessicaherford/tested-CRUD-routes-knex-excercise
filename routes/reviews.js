var express = require('express');
var router = express.Router();


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


module.exports = router;
