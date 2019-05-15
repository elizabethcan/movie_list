import React from 'react';
import MovieRow from './MovieRow.jsx';

function MovieList(props) {
  return (
    <div className="movieList">
      {props.movies.map((movie) => {
        return <MovieRow key={movie.id} movie={movie} searchTerm={props.searchTerm} toggleWatched={props.toggleWatched}/>
      })}
    </div>
  )
}

export default MovieList;

