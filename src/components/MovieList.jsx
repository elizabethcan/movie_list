import React from 'react';
import MovieRow from './MovieRow.jsx';

function MovieList(props) {
  return (
    <div className="movieList">
      {props.unWatched.map((movie) => {
        return <MovieRow key={movie.id} movie={movie} searchTerm={props.searchTerm}/>
      })}
    </div>
  )
}

export default MovieList;

