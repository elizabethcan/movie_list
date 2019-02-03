import React from 'react';
import AddMovie from './AddMovie.jsx';
import Search from './Search.jsx';
import MovieList from './MovieList.jsx';

class App extends React.Component {
	constructor(props) {
    super(props);
		this.state = {
			filter: '',
      unWatched: [],
      watched: [],
      newMovie: null,
    }
    this.newMovie = this.newMovie.bind(this);
    this.addToList = this.addToList.bind(this);
		this.searchList = this.searchList.bind(this);
  }

  newMovie(event) {
    console.log(`newMovie reached`)
    var movie = event.target.value;
    this.setState({
      newMovie: {
        id: this.state.unWatched.length + this.state.watched.length,
        title: movie,
        watched: false
      }
    });
  }
  
  addToList() {
    console.log(`add to list reached`)
    var newMovie = [this.state.newMovie];
    this.setState({
      unWatched: this.state.unWatched.concat(newMovie)
    });
  }

	searchList(filter) {
		this.setState({
			filter: filter
		});
  }

	render () {
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
          <MovieList filter={this.state.filter} unWatched={this.state.unWatched}/>
        </div>
      );
    }
	}
}

export default App;