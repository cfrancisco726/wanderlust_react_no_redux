import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Header } from "./components/Header";
import { Home } from "./components/Home";

// import FlightSearch from './components/flight_search_form';

// import FlightList from './components/flight_list';
// import FlightDetail from './components/flight_detail';

const API_KEY = 'AIzaSyCEodSzpD3t7d7_Bvk076631LTmITGVKfs';

// create a new componenet. This component shoudl produce some HTML

var API = require('qpx-express');

var apiKey = API_KEY;
var qpx = new API(apiKey);

// function reqBody(a,b,c,d) {
// 		return("request": {
// 		    "passengers": { "adultCount": 1 },
// 		    "slice": [{
// 		        "origin": 'NYC',
// 		        "destination": 'LAX',
// 		        "date": '2017-07-11',
// 		        "maxStops": 1,
// 		      },
// 		      {
// 		        "origin": 'LAX',
// 		        "destination": 'NYC',
// 		        "date": `${d}`
// 		      }
// 		    ],
// 		    "maxPrice": `USD${c}`,
// 				"solutions": 5
// 		  }
// 		)
// 		};

class App extends Component {
// 	constructor(props) {
// 		super(props);
//
// 		// this.state = { flights: [] };
// 		// debugger;
// 		this.state = {
// 		isGoing: true,
// 		numberOfGuests: 2}
// 		this.handleInputChange = this.handleInputChange.bind(this)
// }

	// 	qpx.getInfo(body, function(error, flights){
	// 		console.log(flights.trips);
	// 		// this.state.length;
	// 		// this.setState({ flights });
	// 		// this.setState({ flights: flights }) syntactic sugar above
	// 	});
	// }
	constructor(){
		super();
		this.state = {
			budget: 0,
			departure_date: '',
			arrival_date: '',
			numOfPeople: '',
			origin: ''
		}
	}
	handleSubmit(){
		debugger
	}
			render() {
			return (
				<form onSubmit={this.handleSubmit.bind(this)}>
					budget:
					<input type='numeric' onChange={(e)=>{this.setState({budget: e.target.value})}} value={this.state.budget}/>
					numOfPeople
					<input type='numeric' onChange={(e)=>this.setState({numOfPeople: e.target.value})}/>
					Origin:
					<input type='text' onChange={(e)=>this.setState({origin: e.target.value})}/>
					Departure Date:
					<input type='date' onChange={(e)=>this.setState({departure_date: e.target.value})}/>
					Arrival Date:
					<input type='date' onChange={(e)=>this.setState({arrival_date: e.target.value})}/>
					<button type='submit'>submit</button>
				</form>
			);
		}
}
// same as below. fat arrow is equal to function
// const App = function() {
// 	return <div>Hi!</div>;
// }


// Take this comment's generated HTML and put it
// on the page(in the DOM)
ReactDom.render(<App />, document.querySelector('.container'));

// one component per file
