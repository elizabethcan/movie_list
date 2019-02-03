import React from 'react';
import MovieRow from './MovieRow.jsx';

function MovieList(props) {
  return (
    <div className="movieList">
      {props.unWatched.map((movie) => {
        return <MovieRow key={movie.id} movie={movie} filter={props.filter}/>
      })}
    </div>
  )
}

export default MovieList;

