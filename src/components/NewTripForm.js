import React, {Component, PropTypes} from 'react';


const API_KEY = 'AIzaSyCEodSzpD3t7d7_Bvk076631LTmITGVKfs';
var API = require('qpx-express');

var apiKey = API_KEY;
var qpx = new API(apiKey);

class NewTripForm extends Component {
  constructor(){
    super();
    this.state = {
      budget: 0,
      departure_date: '',
      arrival_date: '',
      numOfGuests: '',
      origin: '',
      flights: []
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.getApi = this.getApi.bind(this)

  }

  reqBody(origin, departure_date, arrival_date, numOfGuests, budget) {
    return({"request": {
          "passengers": { "adultCount": parseInt(`${numOfGuests}`) },
          "slice": [{
              "origin": `${origin}`,
              "destination": ['LAX','DEN'],
              "date": `${departure_date}`,
              "maxStops": 0,
            },
            {
              "origin": ['LAX','DEN'],
              "destination": `${origin}`,
              "date": `${arrival_date}`
            }
          ],
          "maxPrice": `USD${budget}`,
          "solutions": "5"
        }
      }
    )
    };

  handleSubmit(e) {
    e.preventDefault();
    this.getApi();
	};

  getApi(){
    qpx.getInfo(this.reqBody(this.state.origin, this.state.departure_date, this.state.arrival_date, this.state.numOfGuests, this.state.budget), function(error, flights){
    let trips = []
    flights["trips"]["tripOption"].forEach(function(trip){
      let h = {}
      h["saleTotal"]= trip["saleTotal"]
      h["carrier"] = trip["slice"][0]["segment"][0]["flight"]["carrier"]
      h["arrival_time_when_leaving_home"] = trip["slice"][0]["segment"][0]["leg"][0]["arrivalTime"]
      h["departure_time_when_leaving_home"] = trip["slice"][0]["segment"][0]["leg"][0]["departureTime"]
      h["arrival_time_when_coming_home"] = trip["slice"][1]["segment"][0]["leg"][0]["arrivalTime"]
      h["departure_time_when_coming_home"] = trip["slice"][1]["segment"][0]["leg"][0]["departureTime"]
      h["origin"] = trip["slice"][0]["segment"][0]["leg"][0]["origin"]
      h["destination"] = trip["slice"][0]["segment"][0]["leg"][0]["destination"]
      trips.push(h)
    })
    this.setState({flights: trips});
    console.log(this.state.flights);
  }.bind(this));
  }




  render() {
	return (
    <div align="center" id="parent">
		<form id="form_login" onSubmit={this.handleSubmit.bind(this)}>
			<div className="form-group col-xs-6">
      <label className="control-label color">Budget:</label>
			<input className="form-control" type='numeric' onChange={(e)=>{this.setState({budget: e.target.value})}}/>
      </div>
      <div className="form-group col-xs-6">
      <label className="control-label color">Number of Guests:</label>
			<input className="form-control" type='numeric' onChange={(e)=>this.setState({numOfGuests: e.target.value})}/>
      </div>
      <div className="form-group col-xs-6">
      <label className="control-label color">Origin:</label>
			<input className="form-control" type='text' onChange={(e)=>this.setState({origin: e.target.value})}/>
      </div>
      <div className="form-group col-xs-6">
      <label className="control-label color">Departure Date:</label>
			<input className="form-control" type='date' onChange={(e)=>this.setState({departure_date: e.target.value})}/>
      </div>
      <div className="form-group col-xs-6">
      <label className="control-label color">Arrival Date:</label>
			<input className="form-control" type='date' onChange={(e)=>this.setState({arrival_date: e.target.value})}/>
      </div>
      <div className="form-group">
      <button className="btn btn-primary btn-lg" type='submit'>submit</button>
		  </div>
    </form>
    </div>
	);
}


}

export default NewTripForm
