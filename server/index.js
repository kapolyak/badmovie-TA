var express = require('express');
var bodyParser = require('body-parser');
var request = require('request')
var { fetchGenres } = require('./helpers/apiHelpers.js')

var app = express();

//Middleware
app.use(bodyParser.json());

// Due to express, when you load the page, it doesn't make a get request to '/', it simply serves up the dist folder
app.use(express.static(__dirname + '/../client/dist'));


//OPTION 1: Use regular routes
app.get('/search', function(req, res) {
  // get the search genre     

  // https://www.themoviedb.org/account/signup

  // use this endpoint to search for movies by genres, you will need an API key

  // https://api.themoviedb.org/3/discover/movie

  // and sort them by horrible votes using the search parameters in the API
});

app.get('/genres', function(req, res) {
  console.log('GET /genres request recieved');

  fetchGenres((body) => {
    console.log(body)
    res.send(body);
  })
  
});

app.post('/save', function(req, res) {

});

app.post('/delete', function(req, res) {

});


app.listen(3000, function() {
  console.log('listening on port 3000!');
});
