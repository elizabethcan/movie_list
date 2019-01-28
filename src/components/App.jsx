import React from 'react';
import $ from 'jquery';

var movies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
];

function Search() {
	return (
		<div>
			<input placeholder="Search..."></input>
			<button>Go</button>
		</div>
	);
}

function MovieRow(props) {
	return (
		<li>{props.movie.title}</li>
	);
}

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}
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