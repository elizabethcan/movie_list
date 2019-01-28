import React from 'react';

var movies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
];

function MovieRow(props) {
	return (
		<li>{props.movie.title}</li>
	)
}

function App() {
	return (
		<div>
			<h1>Movie List</h1>
			<div>
				<MovieRow movie={movies[0]}/>
				<MovieRow movie={movies[1]}/>
				<MovieRow movie={movies[2]}/>
				<MovieRow movie={movies[3]}/>
				<MovieRow movie={movies[4]}/>
			</div>
		</div>
	);
}

export default App;