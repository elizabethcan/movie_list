import React from 'react';

function AddMovie(props) {
  return (
    <div className="add-movie">
      <input placeholder="Add Movie" onChange={props.enterMovie}></input>
      <button onClick={props.addToList}>Add</button>
    </div>
  );
}

export default AddMovie;