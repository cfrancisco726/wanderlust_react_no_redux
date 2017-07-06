import React, {Component} from 'react';
import NavigationBar from './navigationBar';
import NewTripForm from './NewTripForm'
import { Link } from 'react-router';


class App extends Component{
  render(){

    return(
    <div>
        <div className="container">
        <NavigationBar />

        </div>
        <hr />
        <h2>trip it</h2>
        <NewTripForm />
    </div>
      )
  }
}

export default App;
