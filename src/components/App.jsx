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
		this.searchList = this.searchList.bind(this);
		this.state = {
			filter: '',
			movies: movies
		}	
	}

	searchList(filter) {
		console.log(`update list called`);
		this.setState({
			filter: filter
		});
	}

	render () {
		return (
			<div>
				<h1 className="header">Movie List</h1>
        <AddMovie />
				<Search searchList={this.searchList}/>
				<MovieList filter={this.state.filter} movies={this.state.movies}/>
			</div>
		);
	}
}

export default App;