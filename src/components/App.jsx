import React from 'react';
import AddMovie from './AddMovie.jsx';
import Search from './Search.jsx';
import MovieList from './MovieList.jsx';

var movies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
];

class App extends React.Component {
	constructor(props) {
    super(props);
    this.addToList = this.addToList.bind(this);
		this.searchList = this.searchList.bind(this);
		this.state = {
			filter: '',
			movies: movies
		}	
  }
  
  addToList(movie) {
    var newMovie = [];
    newMovie.push({title: movie});
    this.setState({
      movies: movies.concat(newMovie)
    })
  }

	searchList(filter) {
		this.setState({
			filter: filter
		});
  }

	render () {
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

export default App;