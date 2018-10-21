const mysql = require('mysql');
const mysqlConfig = require('../../config.js');

const connection = mysql.createConnection(mysqlConfig);

connection.connect();
 
// connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//   if (error) throw error;
//   console.log('The solution is: ', results[0].solution);
// });
 

var saveToDb = (movie, callback) => {
	console.log('input into sql helper:', movie)
	
	var sql = `
	INSERT INTO movies (vote_count, movie_id, vote_average, title, poster_path, release_date)
	VALUES (?, ?, ?, ?, ?, ?)
	`;
	
	var input = [movie.vote_count, movie.id, movie.vote_average, movie.title, movie.poster_path, movie.release_date];
	
	connection.query(sql, input,(err, result) => {
		if (err) {
			console.log(err);
		} else {
			console.log('1 record inserted');
			callback(err, result);
		}
	})
}

var fetchFavorites = (callback) => {
	var sql = "SELECT * FROM movies";

	connection.query(sql, (err, result) => {
		if (err) {
			console.log(err);
		} else {
			callback(result);
		}
	})
}

var deleteFavorite = (movie, callback) => {
	var sql = `DELETE FROM movies WHERE movie_id = ${movie.movie_id}`

	connection.query(sql, (err, result) => {
		if (err) {
			console.log(err);
		} else {
			console.log('1 record deleted');
			callback(err, result);
		}
	})
}

// connection.end();

module.exports.saveToDb = saveToDb;
module.exports.fetchFavorites = fetchFavorites;
module.exports.deleteFavorite = deleteFavorite;

