CREATE DATABASE IF NOT EXISTS bad_movies;

USE bad_movies;

CREATE TABLE movies (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(50),
  yearMade INTEGER,
  rating INTEGER
);

CREATE TABLE users (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(20)
);


-- mysql -u root < db/sql/moviesSchema.sql

