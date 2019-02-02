import React from 'react';
import Search from './Search.jsx';
import MovieList from './MovieList.jsx';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.updateList = this.updateList.bind(this);
		this.state = {
			filter: null,
		}	
	}

	updateList(filter) {
		console.log(`update list called`);
		this.setState({
			filter: filter
		});
	}

	render () {
		return (
			<div>
				<h1>Movie List</h1>
				<Search updateList={this.updateList}/>
				<MovieList />
			</div>
		);
	}
}

export default App;