import React from 'react';

function MovieRow(props) {
	return (
		<li>{props.movie.title}</li>
	);
}

export default MovieRow;