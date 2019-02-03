import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.state = {
      value: ''
    }
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }
  
  handleClick(event) {
    event.preventDefault();
    this.props.searchList(this.state.value);
  }

  handleClear(event) {
    event.preventDefault();
    this.props.searchList('');
  }
  

  render () {
    return (
      <div className="search-bar">
        <input placeholder="Search..." onChange={this.handleChange}></input>
        <button onClick={this.handleClick}>Go</button>
        <button onClick={this.handleClear}>Clear</button>
      </div>
    );
  }
}

export default Search;