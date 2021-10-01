import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

import { setSearchField, requestCats } from '../actions';

const mapStateToProps = (state) => {
	return {
		searchField: state.searchCats.searchField,
		cats: state.requestCats.cats,
		isPending: state.requestCats.isPending,
		error: state.requestCats.error,
	};
};

// dispatch - triggers action
const MapDispatchToProps = (dispatch) => {
	return {
		onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
		onRequestCats: () => dispatch(requestCats()),
	};
};

class App extends Component {
	/* constructor() {
		super();
		this.state = {
			cats: [],
			// searchfield: '',
		};
	} */

	componentDidMount() {
		/* fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.then((users) => {
				this.setState({ cats: users });
			}); */
		this.props.onRequestCats();
	}

	/* onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value });
	};
 */
	render() {
		/* const { cats  , searchfield  } = this.state; */
		const { searchField, onSearchChange, cats, isPending } = this.props;
		const filteredCats = cats.filter((cat) => {
			return cat.name.toLowerCase().includes(searchField.toLowerCase());
		});
		return isPending ? (
			<h1>Loading</h1>
		) : (
			<div className='tc'>
				<h1 className='f1'>KittyFriends</h1>
				{/* <SearchBox searchChange={this.onSearchChange} /> */}
				<SearchBox searchChange={onSearchChange} />
				<Scroll>
					<CardList cats={filteredCats} />
				</Scroll>
			</div>
		);
	}
}

export default connect(mapStateToProps, MapDispatchToProps)(App);
