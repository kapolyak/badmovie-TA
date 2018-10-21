var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
var { fetchGenres } = require('./helpers/apiHelpers.js');
var { searchByGenre } = require('./helpers/apiHelpers.js');
var { saveToDb } = require('./../db/sql/index.js');
var { fetchFavorites } = require('./../db/sql/index.js');
var { deleteFavorite } = require('./../db/sql/index.js');


var app = express();

//Middleware
app.use(bodyParser.json());

// Due to express, when you load the page, it doesn't make a get request to '/', it simply serves up the dist folder
app.use(express.static(__dirname + '/../client/dist'));


//OPTION 1: Use regular routes
app.post('/search', function(req, res) {
  console.log('POST /search request recieved');
  console.log('genre query =', req.body.genre);
  var genre = req.body.genre;

  searchByGenre(genre, (body) => {
    var result = JSON.parse(body);
    res.send(result);
  })
});

app.get('/genres', function(req, res) {
  console.log('GET /genres request recieved');
  fetchGenres((body) => {
    res.send(body);
  })
});

app.get('/favorites', (req, res) => {
  console.log('GET /favorites request recieved');

  fetchFavorites((body) => {
    console.log('from db we got: ', body)
    res.send(body);
  })

})

app.post('/save', function(req, res) {
  console.log('POST /save request recieved');
  var movie = req.body.movie;

  saveToDb(movie, (result) => {
    console.log(result);
  });

});

app.post('/delete', function(req, res) {
  console.log('POST /delete request recieved');
  var movie = req.body.movie;
  deleteFavorite(movie, (result) => {
    console.log(result);
    res.send();
  })

});


app.listen(3000, function() {
  console.log('listening on port 3000!');
});
