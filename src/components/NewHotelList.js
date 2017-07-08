
import React, {Component, PropTypes}  from 'react';
import Request                        from 'superagent';


class NewHotelList extends Component {
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

  var budget = 1000;
  var checkIn = "2017-07-08";
  var checkOut = "2017-07-10";
  var numRooms = 1;
  var numTravelers = 1;
  var longitude = -2.021484375;
  var latitude = 45.37680856570233;

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
          "longitude": `${longitude}`,
          "latitude": `${latitude}`,
          "radius": 20,
          "unit": "mi"
        }
    }
  };

  componentWillMount(){
    debugger;
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
    }

  // componentWillMount(){
  //   debugger;
  //   var url = "https://api.test.hotelbeds.com/hotel-api/1.0/hotels";
  //     Request.post(url)
  //       .set('Accept-Encoding': 'gzip')
  //       .set('Accept': 'application/json')
  //       .set('Api-Key': 'tt373n7gnkmqfweypk45tzrg')
  //       .set('X-Signature': '1bd54e832e1bd2d470f6f228ad1971f5032755cdd2006ffe35b7599062008642')
  //       .set('X-Originating-Ip': '73.112.72.225')
  //       .set('Content-Type': 'application/json')
  //       .send(this.reqBody(this.state.budget, this.state.checkIn, this.state.checkOut, this.state.numRooms, this.state.numTravelers,  this.state.longitude, this.state.latitude)
  //       .then(res) => {
  //         this.setState({
  //           hotels: res
  //         });
  //       console.log(res)
  //     });
  //   }

  componentDidMount(){

  }

  componentWillReceiveProps(nextProps){

  }

  componentWillUpdate(nextProps, nextState){

  }

  componentWillUnmount(){

  }
// import React, {Component, PropTypes}  from 'react';
// import Request                        from 'superagent';


// class NewHotelForm extends Component {
//   constructor(){
//     super();
//     this.state = {
//       budget: 0,
//       checkIn: '',
//       checkOut: '',
//       numRooms: 0,
//       numAdults: 0,
//       longitude: 0,
//       latitude: 0,
//       hotels: []
//     }
//   }

//   var budget = 1000;
//   var checkIn = "2017-07-08";
//   var checkOut = "2017-07-10";
//   var numRooms = 1;
//   var numTravelers = 1;
//   var longitude = -2.021484375;
//   var latitude = 45.37680856570233;

//   reqBody(budget, checkIn, checkOut, numRooms, numTravelers,  longitude, latitude) {
//     return({"request": {
//         "stay": {
//           "checkIn": `${checkIn}`,
//           "checkOut": `${checkOut}`,
//         },
//         "occupancies": [
//           {
//             "rooms": `${numRooms}`,
//             "adults": `${numAdults}`,
//             "children": 0,
//           }
//         ],
//         "geolocation": {
//           "longitude": `${longitude}`,
//           "latitude": `${latitude}`,
//           "radius": 20,
//           "unit": "mi"
//         }
//     }
//   };

//   componentWillMount(){
//     debugger;
//     var url = "https://api.test.hotelbeds.com/hotel-api/1.0/hotels";
//       Request.post(url)
//         .set('Accept-Encoding': 'gzip')
//         .set('Accept': 'application/json')
//         .set('Api-Key': 'tt373n7gnkmqfweypk45tzrg')
//         .set('X-Signature': '1bd54e832e1bd2d470f6f228ad1971f5032755cdd2006ffe35b7599062008642')
//         .set('X-Originating-Ip': '73.112.72.225')
//         .set('Content-Type': 'application/json')
//         .send(this.reqBody(this.state.budget, this.state.checkIn, this.state.checkOut, this.state.numRooms, this.state.numTravelers,  this.state.longitude, this.state.latitude)
//         .end(function(err, res){
//         console.log(res)
//       });
//     }

//   // componentWillMount(){
//   //   debugger;
//   //   var url = "https://api.test.hotelbeds.com/hotel-api/1.0/hotels";
//   //     Request.post(url)
//   //       .set('Accept-Encoding': 'gzip')
//   //       .set('Accept': 'application/json')
//   //       .set('Api-Key': 'tt373n7gnkmqfweypk45tzrg')
//   //       .set('X-Signature': '1bd54e832e1bd2d470f6f228ad1971f5032755cdd2006ffe35b7599062008642')
//   //       .set('X-Originating-Ip': '73.112.72.225')
//   //       .set('Content-Type': 'application/json')
//   //       .send(this.reqBody(this.state.budget, this.state.checkIn, this.state.checkOut, this.state.numRooms, this.state.numTravelers,  this.state.longitude, this.state.latitude)
//   //       .then(res) => {
//   //         this.setState({
//   //           hotels: res
//   //         });
//   //       console.log(res)
//   //     });
//   //   }

//   componentDidMount(){

//   }

//   componentWillReceiveProps(nextProps){

//   }

//   componentWillUpdate(nextProps, nextState){

//   }

//   componentWillUnmount(){

//   }

  
//   render() {
//     return <div>
//       </div>;
//   }


// export default NewHotelList
