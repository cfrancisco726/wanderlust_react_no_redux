import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import NewTripForm from "./components/NewTripForm"
import NavigationBar from './components/navigationBar';
import {Router, browserHistory} from 'react-router';
import App from "./components/app"



// import FlightSearch from './components/flight_search_form';

// import FlightList from './components/flight_list';
// import FlightDetail from './components/flight_detail';

const API_KEY = 'AIzaSyCEodSzpD3t7d7_Bvk076631LTmITGVKfs';

// create a new componenet. This component shoudl produce some HTML

var API = require('qpx-express');

var apiKey = API_KEY;
var qpx = new API(apiKey);



class Index extends Component {


	render() {
	return (
  <Router>
		<App />
	</Router>
	);
}
}
// same as below. fat arrow is equal to function
// const App = function() {
// 	return <div>Hi!</div>;
// }

export default Index
// Take this comment's generated HTML and put it
// on the page(in the DOM)
ReactDom.render(<App />, document.querySelector('.container'));

// one component per file
