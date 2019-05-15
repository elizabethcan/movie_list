import React from 'react';

function Button(props) {
  if (props.movie.watched === true) {
    return (
      <button className="watched" id={props.movie.id} onClick={props.toggleWatched}>Watched!</button>
    );
  } else {
    return (
      <button className="unwatched" id={props.movie.id} onClick={props.toggleWatched}>Watched!</button>
    )
  }
}

export default Button;