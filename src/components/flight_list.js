import React from 'react';
import FlightListItem from './flight_list_item'

const FlightList = (props) => {
	const flightItems = props.flights.map((flight) => {
		return <FlightListItem flight={flight} />
	});

	return (
		<ul className="col-md-4 list-group">
		{flightItems}
		</ul>
	);
};

export default FlightList;