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
    this.setState({
      value: event.target.value
    });
  }
  
  handleClick(event) {
    event.preventDefault();
    console.log('search click')
    this.props.updateList(this.state.value);
  }
  

  render () {
    return (
      <div className="search-bar">
        <input placeholder="Search..." onChange={this.handleChange}></input>
        <button onClick={this.handleClick}>Go</button>
      </div>
    );
  }
}

export default Search;