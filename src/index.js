import React, { Component } from 'react';
import ReactDom from 'react-dom';
// import { Header } from "./components/Header";
// import { Home } from "./components/Home";
import NewTripForm from "./components/NewTripForm"

import NewHotelList from "./components/NewHotelList"

import NavigationBar from './components/navigationBar';
import {BrowserRouter} from 'react-router-dom';
import App from "./components/app";
import SignupPage from './components/signup/SignupPage'

const API_KEY = 'AIzaSyCEodSzpD3t7d7_Bvk076631LTmITGVKfs';

var API = require('qpx-express');

var apiKey = API_KEY;
var qpx = new API(apiKey);

class App extends Component {

	render() {
		return (
			<div>
				<NewTripForm />
			</div>
				<div>
					<NewHotelList />
			</div>
		);
	}
}

ReactDom.render(
	<BrowserRouter>
		<App/>
	</BrowserRouter>, document.querySelector('.container'));
