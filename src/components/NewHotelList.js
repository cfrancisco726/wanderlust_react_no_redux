import React, {Component, PropTypes}  from 'react';
import Request                        from 'superagent';


class NewHotelForm extends Component {
  constructor(){
    super();
    this.state = {
      budget: 0,
      checkIn: '',
      checkOut: '',
      numRooms: 0,
      numAdults: 0,
      longitude: 0,
      latitude: 0,
      hotels: []
    }
  }

  reqBody(budget, checkIn, checkOut, numRooms, numTravelers,  longitude, latitude) {
    return({"request": {
        "stay": {
          "checkIn": `${checkIn}`,
          "checkOut": `${checkOut}`,
        },
        "occupancies": [
          {
            "rooms": `${numRooms}`,
            "adults": `${numAdults}`,
            "children": 0,
          }
        ],
        "geolocation": {
          "longitude": -2.021484375,
          "latitude": 45.37680856570233,
          "radius": 20,
          "unit": "mi"
        }
    }
  };

  componentWillMount(){
    var url = "https://api.test.hotelbeds.com/hotel-api/1.0/hotels";
      Request.post(url)
        .set('Accept-Encoding': 'gzip')
        .set('Accept': 'application/json')
        .set('Api-Key': 'tt373n7gnkmqfweypk45tzrg')
        .set('X-Signature': '1bd54e832e1bd2d470f6f228ad1971f5032755cdd2006ffe35b7599062008642')
        .set('X-Originating-Ip': '73.112.72.225')
        .set('Content-Type': 'application/json')
        .send(this.reqBody(this.state.budget, this.state.checkIn, this.state.checkOut, this.state.numRooms, this.state.numTravelers,  this.state.longitude, this.state.latitude)
        .end(function(err, res){
          console.log(res)
      });

      // method: 'POST',
      // headers: {
      //   'Accept-Encoding': 'gzip'
      //   'Accept': 'application/json'
      //   'Api-Key': 'tt373n7gnkmqfweypk45tzrg'
      //   'X-Signature': '1bd54e832e1bd2d470f6f228ad1971f5032755cdd2006ffe35b7599062008642'
      //   'X-Originating-Ip': '73.112.72.225'
      //   'Content-Type': 'application/json'
      // },
      // body: JSON.stringify(this.reqBody(this.state.budget, this.state.checkIn, this.state.checkOut, this.state.numRooms, this.state.numTravelers,  this.state.longitude, this.state.latitude), (function(hotels){
        
        let hotels = []
      })
        console.log(hotels);
  }


// reqBody(budget, checkIn, checkOut, numRooms, numAdults, numChildren, longitude, latitude) {
//     return({"request": {
//         "stay": {
//           "checkIn": `${checkIn}`,
//           "checkOut": `${checkOut}`,
//         },
//         "occupancies": [
//           {
//             "rooms": `${numRooms}`,
//             "adults": `${numAdults}`,
//             "children": `${numChildren}`,
//           }
//         ],
//         "geolocation": {
//           "longitude": -2.021484375,
//           "latitude": 45.37680856570233,
//           "radius": 20,
//           "unit": "mi"
//         }
//     }

  render() {
    return(
      )
  }


}

export default NewHotelList
