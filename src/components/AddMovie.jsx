import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="add-movie">
        <input placeholder="Add Movie"></input>
        <button>Add</button>
      </div>
    );
  }
}

export default AddMovie;