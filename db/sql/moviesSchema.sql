CREATE DATABASE IF NOT EXISTS bad_movies;

USE bad_movies;

CREATE TABLE movies (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  vote_count INTEGER,
  movie_id INTEGER,
  vote_average INTEGER,
  title VARCHAR(50) UNIQUE,
  poster_path VARCHAR(150),
  release_date VARCHAR (10)
);

-- CREATE TABLE users (
--   id INTEGER AUTO_INCREMENT PRIMARY KEY,
--   username VARCHAR(20)
-- );


-- mysql -u root < db/sql/moviesSchema.sql

