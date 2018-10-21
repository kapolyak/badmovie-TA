import React from 'react';
import axios from 'axios';

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      genres: [],
      currentSelect: ''
    };
    this.getGenres = this.getGenres.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  getGenres() {
    axios.get('./genres').then((res) => {
      var genresArray = res.data.genres;
      this.setState({
        genres: genresArray
      })
    })
  }

  handleClick(e) {
    e.preventDefault();
    var genre = this.state.currentSelect;
    console.log('search from front end for: ', genre);

    this.props.getMovies(genre);

  }

  handleChange(e) {
    e.preventDefault();
    this.setState({
      currentSelect: e.target.value
    })
  }

  componentDidMount() {
    this.getGenres();
  }

  render() {
    return (
      <div className="search">
        <button onClick={() => {this.props.swapFavorites(); this.props.getFavorites()}}>{this.props.showFaves ? "Show Results" : "Show Favorites"}</button>
        <br/><br/>

        {/* Make the select options dynamic from genres !!! */}
        {/* How can you tell which option has been selected from here? */}

        <select value={this.state.currentSelect} onChange={this.handleChange}>
          {this.state.genres.map((genre) => {
            return (
              <option value={genre.id.toString()}>{genre.name}</option>
            )
          })}
        </select>
        <br/><br/>
        <button onClick={this.handleClick}>Search</button>

      </div>
    );
  }
}

export default Search;