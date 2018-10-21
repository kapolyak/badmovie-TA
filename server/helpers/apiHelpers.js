const request = require('request');
const axios = require('axios');
const { API_KEY } = require('../../config.js');

// write out logic/functions required to query TheMovieDB.org

// FOR REFERENCE:
// https://www.themoviedb.org/account/signup
// https://developers.themoviedb.org/3/discover/movie-discover
// Get your API Key and save it in your config file

// Don't forget to export your functions and require them within your server file

var fetchGenres = (callback) => {

	var encodedUri = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`

	let options = {
		url: encodedUri,
		method: 'GET'
	};

	request(options, (err, res, body) => {
		if (err) console.log(err);
		console.log('statusCode:', res && res.statusCode);
		callback(body);
	})

}

var searchByGenre = (genre, callback) => {

	var encodedUri = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.asc&include_adult=false&include_video=false&page=1&with_genres=${genre}`;
	
	let options = {
		url: encodedUri,
		method: 'GET'
	};

	request(options, (err, res, body) => {
		if (err) console.log(err);
		console.log('statusCode:', res && res.statusCode);
		callback(body);
	})

}

module.exports.fetchGenres = fetchGenres;
module.exports.searchByGenre = searchByGenre;