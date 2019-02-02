import React from 'react';
import MovieRow from './MovieRow.jsx';

function MovieList(props) {
  return (
    <div className="movieList">
      {props.movies.map((movie) => {
        return <MovieRow movie={movie} filter={props.filter}/>
      })}
    </div>
  )
}

export default MovieList;

