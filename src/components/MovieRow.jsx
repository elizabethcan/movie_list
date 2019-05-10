import React from 'react';

function MovieRow(props) {
	const movie = props.movie.title;
	const searchTerm = props.searchTerm;
	
	if (searchTerm.length === 0) {
		return (
			<li className="movieRow">{
        props.movie.title}
        <button className="addBtn">Watched!</button>
      </li>
		);
	} else if (movie.toLowerCase().includes(searchTerm.toLowerCase())) {
		return (
      <li className="movieRow">
        {props.movie.title}
        <button className="addBtn">Watched!</button>
      </li>
		);
	} else {
		return null;
	}
}

export default MovieRow;