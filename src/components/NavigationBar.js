import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './logo'

export default () => {
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
        <a className="navbar-brand" href="#"> <div className="">
  <h1 className="center logo"><img src="../style/img/logo_hp.png" alt="Wanderlust"></img></h1>
  <p className="center color"> Your next adventure is just a budget away</p>
  </div></a>
        <span className="nav navbar-nav navbar-right">
          <Link className="color" to="/signup"> Sign up | </Link> 
          <Link className="color" to="/login"> Login</Link>
        </span>
        </div>

        <div className="collapse navbar-collapse">
          <ul className="nav navbar-nav navbar-right">
            <li><Link to="/signup"> Sign up</Link></li>
          </ul>
        </div>
      </div>
    </nav>

    )
}
