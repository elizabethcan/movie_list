import React from 'react';
import AddMovie from './AddMovie.jsx';
import Search from './Search.jsx';
import MovieList from './MovieList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      unWatched: [],
      watched: [],
      newMovie: null,
    }
    this.newMovie = this.newMovie.bind(this);
    this.addToList = this.addToList.bind(this);
    this.searchList = this.searchList.bind(this);
  }

  newMovie(event) {
    this.setState({
      newMovie: {
        id: this.state.unWatched.length + this.state.watched.length,
        title: event.target.value,
        watched: false
      }
    });
  }
  
  addToList() {
    var newMovie = [this.state.newMovie];
    this.setState({
      unWatched: this.state.unWatched.concat(newMovie)
    });
  }

  searchList(searchTerm) {
    console.log('search list: ', searchTerm)
    this.setState({
      searchTerm: searchTerm
    });
  }

  render() {
    if (this.state.unWatched.length + this.state.watched.length === 0) {
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
          <MovieList searchTerm={this.state.searchTerm} unWatched={this.state.unWatched}/>
        </div>
      );
    }
  }
}

export default App;