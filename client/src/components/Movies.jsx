import React from 'react';

class Movies extends React.Component {
  constructor(props) {
    super(props)
  }

  // If you're currently showing the fave list, delete the movie instead
  // You can tell which list is currently being rendered based on whether the prop "showFaves" is false (search results) or true (fave list) (within index.jsx)

  render() {

    return (
      <ul className="movies">
        { this.props.movies.map((movie) => {
          var releaseDate = movie.release_date ? movie.release_date.slice(0, 4) : '';
          var imgUrl = movie.poster_path !== null ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : 'https://vignette.wikia.nocookie.net/max-steel-reboot/images/7/72/No_Image_Available.gif/revision/latest?cb=20130902173013'
          return (
            <li className="movie_item" value={movie.id}>
              <img src={imgUrl} />
              <div className="movie_description">
                <h2>{movie.title}</h2>
                <section className="movie_details">
                  <div className="movie_year">
                    <span className="title">Year</span>
                    <span>{releaseDate}</span>
                  </div>
                  <div className="movie_rating">
                    <span className="title">Rating</span>
                    <span>{movie.vote_average}</span>
                  </div>
                </section>
              </div>
              <button onClick={(e) => this.props.showFaves ? this.props.deleteMovie(movie) : this.props.saveMovie(movie)}>{this.props.showFaves ? "Remove from favorites" : "Add to favorites"}</button>
            </li>
          )
        })}        
      </ul>
    );
  }
}

export default Movies;