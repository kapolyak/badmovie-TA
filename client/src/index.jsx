import React from 'react';
import ReactDOM from 'react-dom';
// import AnyComponent from './components/filename.jsx'
import Search from './components/Search.jsx';
import Movies from './components/Movies.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
  	super(props)
  	this.state = {
      movies: [],
      favorites: [],
      showFaves: false,
    };
    
    this.getMovies = this.getMovies.bind(this);
    this.saveMovie = this.saveMovie.bind(this);
    this.swapFavorites = this.swapFavorites.bind(this);
    this.getFavorites = this.getFavorites.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);
  }

  getMovies(genre) {
    axios.post('./search', {genre: genre}).then((res) => {
      console.log('search results:', res.data.results);
      var movieList = res.data.results;
      this.setState({
        movies: movieList
      })
    })
  }

  getFavorites() {
    axios.get('./favorites').then((res) => {
      console.log('favorites from db:', res.data);
      var favoritesList = res.data;
      this.setState({
        favorites: favoritesList
      })
    })
  }

  saveMovie(movie) {
    axios.post('./save', {movie: movie}).then((res) => {
      res.end();
    })
  }

  deleteMovie(movie) {
    console.log('delete movie called')
    axios.post('/delete', {movie: movie}).then((res) => {
      console.log(res);
      this.getFavorites();
    })
  }

  swapFavorites() {
  //dont touch
    this.setState({
      showFaves: !this.state.showFaves
    });
  }

  componentDidMount() {
    this.getMovies('35');
    this.getFavorites();
  }

  render () {
  	return (
      <div className="app">
        <header className="navbar"><h1>Bad Movies</h1></header> 
        
        <div className="main">
          <Search getFavorites={this.getFavorites} getMovies={this.getMovies} swapFavorites={this.swapFavorites} showFaves={this.state.showFaves}/>
          <Movies 
            saveMovie={this.saveMovie} 
            movies={this.state.showFaves ? this.state.favorites : this.state.movies} 
            showFaves={this.state.showFaves} 
            deleteMovie={this.deleteMovie}/>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));