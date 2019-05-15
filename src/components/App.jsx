import React from 'react';
import AddMovie from './AddMovie.jsx';
import Search from './Search.jsx';
import MovieList from './MovieList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      newMovie: null,
      movies: [],
      watched: false,
    }
    this.addToList = this.addToList.bind(this);
    this.newMovie = this.newMovie.bind(this);
    this.searchList = this.searchList.bind(this);
    this.toggleWatched = this.toggleWatched.bind(this);
  }

  addToList() {
    var newMovie = [this.state.newMovie];
    this.setState({
      movies: this.state.movies.concat(newMovie)
    });
  }

  newMovie(event) {
    this.setState({
      newMovie: {
        id: this.state.movies.length,
        title: event.target.value,
        watched: false
      }
    });
  }
  
  searchList(searchTerm) {
    console.log('search list: ', searchTerm)
    this.setState({
      searchTerm: searchTerm
    });
  }

  toggleWatched(event) {
    console.log(`movie id: ${event.target.id}`);
    // can use id as the index in list of movies, but once i am able to start deleting movies, this will no longer work...can also pass down index as id for button
    var movies = this.state.movies;
    movies[event.target.id].watched = !movies[event.target.id].watched;
    this.setState({
      movies: movies
    });
  }

  render() {
    if (this.state.movies.length === 0) {
      return (
        <div>
          <h1>Movie List - Please Add A Movie!</h1>
          <AddMovie  enterMovie={this.newMovie} addToList={this.addToList}/>
        </div>
      );
    } else {
      return (
        <div>
          <h1 className="header">Movie List</h1>
          <AddMovie enterMovie={this.newMovie} addToList={this.addToList}/>
          <Search searchList={this.searchList}/>
          <MovieList displayWatched={this.state.watched} searchTerm={this.state.searchTerm} movies={this.state.movies} toggleWatched={this.toggleWatched}/>
        </div>
      );
    }
  }
}

export default App;