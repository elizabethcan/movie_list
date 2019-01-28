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
		<li>{props.movie}</li>
	)
}

function App() {
	return (
		<div>
			<h1>Movie List</h1>
			<div>
				<MovieRow movie={movies[0].title}/>
				<MovieRow movie={movies[1].title}/>
				<MovieRow movie={movies[2].title}/>
				<MovieRow movie={movies[3].title}/>
				<MovieRow movie={movies[4].title}/>
			</div>
		</div>
	);
}

export default App;