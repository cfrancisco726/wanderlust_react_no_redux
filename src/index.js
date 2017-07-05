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

var body = {
		"request": {
		    "passengers": { "adultCount": 1 },
		    "slice": [{
		        "origin": 'NYC',
		        "destination": 'LAX',
		        "date": '2017-07-11',
		        "maxStops": 1,
		      },
		      {
		        "origin": 'LAX',
		        "destination": 'NYC',
		        "date": '2017-07-12'
		      }
		    ],
		    "maxPrice": "USD1000",
				"solutions": 5
		  }
		};

class App extends Component {
	constructor(props) {
		super(props);

		this.state = { flights: [] };
		// debugger;
		


		qpx.getInfo(body, function(error, flights){
			console.log(flights.trips);
			// this.state.length;
			// this.setState({ flights });
			// this.setState({ flights: flights }) syntactic sugar above
		});
	}
	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-xs-10 col-xs-offset-1">
						<Header/>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-10 col-xs-offset-1">
						<Home/>
					</div>
				</div>
			</div>
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