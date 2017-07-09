import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';

export default class NavigationBar extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      token: ''
    }
    this.logout = this.logout.bind(this);
  }
  componentWillMount(){
    this.token = (window.localStorage.getItem('token'));
    if (this.token) {
      this.setState({ username: window.localStorage.getItem('name'),
    token: this.token });
    }
  }
  logout(e){
    e.preventDefault();
    window.localStorage.removeItem('token');
    browserHistory.push('/login');
  }

  render(){

    return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
        <Link to="/" className="navbar-brand">wanderlust</Link>
        <a className="navbar-brand" href="#">logo</a>
        {this.state.token ?
        <ul className="nav navbar-nav navbar-right">
          <li><Link to="#" onClick={this.logout}> Log out</Link></li>
          <li>{this.state.username}</li>
           </ul>:
           <ul className="nav navbar-nav navbar-right"> 
            <li><Link to="/signup"> Sign up</Link></li>
            <li><Link to="/login"> Log in</Link></li>
          </ul>
          }
        </div>

        <div className="collapse navbar-collapse">
          <ul className="nav navbar-nav navbar-right">
            <li><Link to="/signup"> Sign up</Link></li>
            <li><Link to="/login"> Login </Link></li>
          </ul>
        </div>
      </div>
    </nav>
    )
  } 

}
  
