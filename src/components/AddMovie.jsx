import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.changeHandler = this.changeHandler.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
  }

  changeHandler(event) {
    this.props.enterMovie(event)
  }

  clickHandler(event) {
    event.preventDefault();
    this.props.addToList();
  }

  render() {
    console.log(`this.props: `, this.props);
    return (
      <div className="add-movie">
        <input placeholder="Add Movie" onChange={(e) => this.changeHandler(e)}></input>
        <button onClick={this.clickHandler}>Add</button>
      </div>
    );
  }
}

export default AddMovie;