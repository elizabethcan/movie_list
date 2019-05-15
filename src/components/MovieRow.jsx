import React from 'react';
import Button from './Button';

function MovieRow(props) {
	const movie = props.movie.title;
	const searchTerm = props.searchTerm;
	
	if (searchTerm.length === 0) {
		return (
			<li className="movieRow">{
        props.movie.title}
        <Button watched={props.movie.watched}/>
      </li>
		);
	} else if (movie.toLowerCase().includes(searchTerm.toLowerCase())) {
		return (
      <li className="movieRow">
        {props.movie.title}
        <Button watched={props.movie.watched}/>
      </li>
		);
	} else {
		return null;
	}
}

export default MovieRow;