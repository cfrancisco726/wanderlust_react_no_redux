import React, { Component } from 'react';
import ReactDom from 'react-dom';
import NewTripForm from "./components/NewTripForm"
import Logo from "./components/logo"
import NewHotelList from "./components/NewHotelList"
import NavigationBar from './components/navigationBar';
import {BrowserRouter} from 'react-router-dom';
import App from "./components/app";
import SignupPage from './components/signup/SignupPage'


ReactDom.render(
	<BrowserRouter>
		<App/>
	</BrowserRouter>, document.querySelector('.container'));
