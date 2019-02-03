import React from 'react';
import AddMovie from './AddMovie.jsx';
import Search from './Search.jsx';
import MovieList from './MovieList.jsx';

class App extends React.Component {
	constructor(props) {
    super(props);
    this.addToList = this.addToList.bind(this);
		this.searchList = this.searchList.bind(this);
		this.state = {
			filter: '',
			movies: []
		}	
  }
  
  addToList(movie) {
    var newMovie = [];
    newMovie.push({
      id: this.state.movies.length,
      title: movie,
      watched: false
    });
    this.setState({
      movies: this.state.movies.concat(newMovie)
    })
  }

	searchList(filter) {
		this.setState({
			filter: filter
		});
  }

	render () {
    if (this.state.movies.length === 0) {
      return (
        <div>
          <h1>Movie List - Please Add A Movie!</h1>
          <AddMovie addToList={this.addToList}/>
        </div>
      );
    } else {
      return (
        <div>
          <h1 className="header">Movie List</h1>
          <AddMovie addToList={this.addToList}/>
          <Search searchList={this.searchList}/>
          <MovieList filter={this.state.filter} movies={this.state.movies}/>
        </div>
      );
    }
	}
}

export default App;