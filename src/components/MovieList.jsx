import React from 'react';
import MovieRow from './MovieRow.jsx';

var movies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
];

class MovieList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {movies.map((movie) => {
          return <MovieRow movie={movie} filter={this.props.filter}/>
        })}
      </div>
    )
  }
}

export default MovieList;

