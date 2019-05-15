import React from 'react';
import Button from './Button';

function MovieRow(props) {
	if (props.searchTerm.length === 0) {
		return (
			<li className="movieRow">{
        props.movie.title}
        <Button movie={props.movie}/>
      </li>
		);
	} else if (props.movie.title.toLowerCase().includes(props.searchTerm.toLowerCase())) {
		return (
      <li className="movieRow">
        {props.movie.title}
        <Button movie={props.movie}/>
      </li>
		);
	} else {
		return null;
	}
}

export default MovieRow;