import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      value: ''
    }
  }

  handleChange(event) {
    console.log(event.target.value);
    this.setState({
      value: event.target.value
    })
  }
  
  handleClick(event) {
    event.preventDefault();
  }
  

  render () {
    return (
      <div>
        <input placeholder="Search..." onChange={this.handleChange}></input>
        <button onClick={this.handleClick}>Go</button>
      </div>
    );
  }
}

export default Search;