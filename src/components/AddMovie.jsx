import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.changeHandler = this.changeHandler.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
    this.state = {
      entry: ''
    }
  }

  changeHandler(event) {
    this.setState({
      entry: event.target.value
    });
  }

  clickHandler(event) {
    event.preventDefault();
    this.props.addToList(this.state.entry);
  }

  render() {
    return (
      <div className="add-movie">
        <input placeholder="Add Movie" onChange={this.changeHandler}></input>
        <button onClick={this.clickHandler}>Add</button>
      </div>
    );
  }
}

export default AddMovie;