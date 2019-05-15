import React from 'react';
import Button from './Button';

function MovieRow(props) {
  if (props.searchTerm.length === 0) {
    return (
      <li className="movieRow">{
        props.movie.title}
        <Button movie={props.movie} toggleWatched={props.toggleWatched}/>
      </li>
    );
  } else if (props.movie.title.toLowerCase().includes(props.searchTerm.toLowerCase())) {
    return (
      <li className="movieRow">
        {props.movie.title}
        <Button movie={props.movie} toggleWatched={props.toggleWatched}/>
      </li>
    );
  } else {
    return (
      <li className="noResults">
        Movie Not Found
      </li>
    );
  }
}

export default MovieRow;