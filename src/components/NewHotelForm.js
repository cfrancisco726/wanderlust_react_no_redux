import React, {Component, PropTypes}  from 'react';
import Request                        from 'superagent';

const API_KEY = 'tt373n7gnkmqfweypk45tzrg';

var apiKey = API_KEY;

class NewHotelForm extends Component {
  constructor(){
    super();
    this.state = {
      budget: 0,
      checkIn: '',
      checkOut: '',
      numRooms: 0,
      numAdults: 0,
      numChildren: 0,
      longitude: 0,
      latitude: 0
    }
    this.handleSubmit = this.handleSubmit.bind(this)

  }

  // componentWillMount(){
  //   var url = "https://api.test.hotelbeds.com/hotel-api/1.0/hotels?availabilityRQ";
  //   Request.get(url).then((response) => {
  //     this.setState({
  //       hotels: response.hotels
  //     })
  //   })
  // }

  // fetch('https://api.test.hotelbeds.com/hotel-api/1.0/hotels')
  //   .then(function(response){
  //     return response.json();
  //   })
  //   .catch(function(error){
  //     console.log('Fetch failed', error);
  //   })

  reqBody(budget, checkIn, checkOut, numRooms, numAdults, numChildren, longitude, latitude) {
    return({"request": {
        "stay": {
          "checkIn": `${checkIn}`,
          "checkOut": `${checkOut}`,
        },
        "occupancies": [
          {
            "rooms": `${numRooms}`,
            "adults": `${numAdults}`,
            "children": `${numChildren}`,
          }
        ],
        "geolocation": {
          "longitude": -2.021484375,
          "latitude": 45.37680856570233 }
    }

  handleSubmit(e){
    e.preventDefault()
    qpx.getInfo(this.reqBody(this.state.budget, this.state.checkIn, this.state.checkOut, this.state.adults, this.state.children), function(error, hotels){

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
    console.log(hotels)
  })
  }


        fetch('https://api.test.hotelbeds.com/hotel-api/1.0/hotels',
        {
          method: 'POST',
          headers: {
            'Accept-Encoding': 'gzip'
            'Accept': 'application/json'
            'Api-Key': 'tt373n7gnkmqfweypk45tzrg'
            'X-Signature': '6d50a9de3e8672cc0031bc380700e267902cbb29a622e8a78dbd0a2ab619a959'
            'X-Originating-Ip': '38.88.254.234'
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
          })
        })



  render() {
  return (
    <form onSubmit={this.handleSubmit.bind(this)}>
      budget:
      <input type='numeric' onChange={(e)=>{this.setState({budget: e.target.value})}}/><br />
      check in Date:
      <input type='date' onChange={(e)=>this.setState({checkIn: e.target.value})}/><br />
      checkOut Date:
      <input type='date' onChange={(e)=>this.setState({checkOut: e.target.value})}/><br />
      Number of Rooms:
      <input type='date' onChange={(e)=>this.setState({numRooms: e.target.value})}/><br />
      Number of Adults:
      <input type='numeric' onChange={(e)=>this.setState({adults: e.target.value})}/><br />
      Number of children:
      <input type='numeric' onChange={(e)=>this.setState({children: e.target.value})}/><br />
      longitude:
      <input type='date' onChange={(e)=>this.setState({longitude: e.target.value})}/><br />
      latitude Date:
      <input type='date' onChange={(e)=>this.setState({latitude: e.target.value})}/><br />
      <button type='submit'>submit</button>
    </form>
  );
}


}

export default NewTripForm
