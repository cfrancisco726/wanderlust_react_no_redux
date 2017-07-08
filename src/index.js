import React, { Component } from 'react';
import ReactDom from 'react-dom';
import NewTripForm from "./components/NewTripForm"
import Logo from "./components/logo"

import NewHotelList from "./components/NewHotelList"

import NavigationBar from './components/navigationBar';
import {BrowserRouter} from 'react-router-dom';
import App from "./components/app";
import SignupPage from './components/signup/SignupPage'


const API_KEY = 'AIzaSyCEodSzpD3t7d7_Bvk076631LTmITGVKfs';

var API = require('qpx-express');

var apiKey = API_KEY;
var qpx = new API(apiKey);



class Index extends Component {


	render() {
		return (
			<div>
			<Logo />
			<NewTripForm />
	  <Router>
			<App />
		</Router>
		</div>
		);

	}
}

ReactDom.render(
	<BrowserRouter>
		<App/>
	</BrowserRouter>, document.querySelector('.container'));
