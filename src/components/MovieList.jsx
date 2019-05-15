import React from 'react';
import MovieRow from './MovieRow.jsx';

function MovieList(props) {
  if (props.displayWatched === true) {
    var list = props.movies.filter((movie) => {
      console.log(movie);
      movie.watched === true;
    });
    console.log(list);
  } else {
    var list = props.movies.filter((movie) => {
      console.log(movie);
      movie.watched === false;
    });
    console.log(list);
  }
  return (
    <div className="movieList">
      {props.movies.map((movie) => {
        return <MovieRow key={movie.id} movie={movie} searchTerm={props.searchTerm} toggleWatched={props.toggleWatched}/>
      })}
    </div>
  )
}

export default MovieList;

