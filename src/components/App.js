import React from 'react';
import NavigationBar from './NavigationBar';
import NewTripForm from './NewTripForm'
import MapsPage from './maps/mapsPage'
// import { Header } from "./Header";
// import { Home } from "./Home";
import { Route } from 'react-router';
import SignupPage from './signup/SignupPage'
import LoginPage from './signup/LoginPage'


// class App extends Component{
//   render(){
//     return(
//     <div>
//       <NavigationBar />
//       <Main/>
//     </div>
//       )
//   }
// }

export default (
<Route>
  <Route path="/" component={NewTripForm} />
  <Route path="/signup" component={SignupPage} />
  <Route path="/login" component={LoginPage} />
  <Route path="/map" component={MapsPage} />
</Route>
);
