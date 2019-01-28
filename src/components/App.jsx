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
	);
}

function App() {
	return (
		<div>
			<h1>Movie List</h1>
			<div>
				{movies.map((movie) => {
					return <MovieRow movie={movie}/>
				})}
			</div>
		</div>
	);
}

export default App;