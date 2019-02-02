import React from 'react';
import MovieRow from './MovieRow.jsx';
import Search from './Search.jsx';

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
		this.handleChange = this.handleChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.state = {
			filter: null,
		}	
	}

	handleClick() {
		alert('click')
	}

	handleChange(event) {
		console.log(event.target.value);
	}
	// when search is null we want to display all movies
	// when there is a search term entered, if it matches a movie
		// return just that movie
	// else
		// return no results found

	render () {
		return (
			<div>
				<h1>Movie List</h1>
				<Search />
				<div>
					{movies.map((movie) => {
						return <MovieRow movie={movie}/>
					})}
				</div>
			</div>
		);
	}
}

export default App;