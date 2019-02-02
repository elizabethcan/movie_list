import React from 'react';

function MovieRow(props) {
	const movie = props.movie.title;
	const filter = props.filter;
	
	if (filter.length === 0) {
		return (
			<li>{props.movie.title}</li>
		);
		} else if (movie === filter) {
		return (
			<li>{props.movie.title}</li>
		);
	} else {
		return null;
	}
}

export default MovieRow;