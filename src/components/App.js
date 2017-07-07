import React, {Component} from 'react';
import NavigationBar from './navigationBar';
import NewTripForm from './NewTripForm'
import MapsPage from './maps/mapsPage'
import { Header } from "./Header";
import { Home } from "./Home";
import {Switch, Route, IndexRoute, Link } from 'react-router-dom';
import SignupPage from './signup/SignupPage'

import Logo from './logo'

import LoginPage from './signup/LoginPage'


const Main = () => (
  <main>
    <Switch>
      <Route path="/signup" component={SignupPage} />

       <Route path="/map" component={MapsPage}/>

      <Route path="/login" component={LoginPage} />
      <Route path="/" component={NewTripForm} />
  
    </Switch>
  </main>
)

class App extends Component{
  render(){
    return(
    <div>
      <NavigationBar />
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Main/>

        <hr />

        <h2 className="color">Choose your destiny:</h2>

      <NewTripForm />
    </div>

      )
  }
}

export default App;
