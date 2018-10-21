import React from 'react';
import axios from 'axios';

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      genres: []
    };
    this.getGenres = this.getGenres.bind(this);
  }
  getGenres() {
    axios.get('./genres', ).then((res) => {
      console.log('response from server: ', res.data.genres);
      var genresArray = res.data.genres;
      this.setState({
        genres: genresArray
      })
    })
  }

  render() {
    return (
      <div className="search">
        <button onClick={() => {this.props.swapFavorites()}}>{this.props.showFaves ? "Show Results" : "Show Favorites"}</button>
        <br/><br/>

        {/* Make the select options dynamic from genres !!! */}
        {/* How can you tell which option has been selected from here? */}

        <select>
          {this.state.genres.map((genre) => {
            return (
              <option value={genre.id.toString()}>{genre.name}</option>
            )
          })}
        </select>
        <br/><br/>
        <button onClick={this.getGenres}>Show Genres</button>
        <button>Search</button>

      </div>
    );
  }
}

export default Search;