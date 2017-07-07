import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
        <Link to="/" className="navbar-brand">wanderlust</Link>
        <a className="navbar-brand" href="#">logo</a>
        <ul className="nav navbar-nav navbar-right">
          <li><Link to="/signup"> Sign up</Link></li>
        </ul>
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
