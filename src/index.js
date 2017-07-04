import React from 'react';
import ReactDom from 'react-dom';

// create a new componenet. This component shoudl produce some HTML

import FlightSearch from './components/flight_search_form';

const API_KEY = 'AIzaSyCEodSzpD3t7d7_Bvk076631LTmITGVKfs	'

const App = () => {
	return (
		<div>
			<FlightSearch />
		</div>
	);
}
// same as below. fat arrow is equal to function
// const App = function() {
// 	return <div>Hi!</div>;
// }


// Take this comment's generated HTML and put it 
// on the page(in the DOM)
ReactDom.render(<App />, document.querySelector('.container'));

// one component per file