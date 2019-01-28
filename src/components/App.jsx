import React from 'react';
import $ from 'jquery';

var movies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
];

function Search(props) {
	return (
		<div>
			<input placeholder="Search..."></input>
			<button onClick={props.onClick}>Go</button>
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

	handleClick() {
		alert('Go Clicked!')
	}

	render () {
		return (
			<div>
				<h1>Movie List</h1>
				<Search onClick={this.handleClick.bind(this)}/>
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