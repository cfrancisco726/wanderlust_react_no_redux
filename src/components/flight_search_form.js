import React, { Component } from 'react';

class FlightSearch extends Component {
	constructor(props) {
		// called whenever we have an instance of FlightSearch
		super(props);

		this.state = { term: ''};
		// a plain js object exists on any component that is a class based component
		// only inside a constructor function do we change state like above
	}

						// whenever we change value of input element our even handler runs, set the state with new of the input. whenever we call this.state it causes our component to rerender
				// state should tell input what the current value should be 
				// controlled component has its value set by state. value only changes when the state changes
				// when a user inputs something they only trigger an event
				// value of the input is equal to the state
	render() {
		return (
			<div>
				<input 
					value ={this.state.term}
					onChange ={event => this.setState({ term: event.target.value})} />

			</div>
		);
	}
	// any function passed to onChange will automatically be called when changed

	// onInputChange(event){
	// 	console.log(event);
	// } same as input onchange
}

// class based components are used whenever we have a component that needs to be aware state
// functional just spits out jsx. can contain class based components

export default FlightSearch;



