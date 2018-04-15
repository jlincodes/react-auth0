import React, { Component } from 'react';
import { Link } from 'react-router';
import '../App.css';

class Nav extends Component {

  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="navbar-header">
          <Link className="navbar-brand" to="/">Chuck Norris World</Link>
        </div>
        <ul>
          <li>
            <Link to="/">Food Jokes</Link>
          </li>
          <li>
            <Link to="/special">Celebrity Jokes</Link>
          </li>
        </ul>
        <ul>
          <li><button className="btn btn-info log">Log In</button></li>
          <li><button className="butn btn-danger log">Log Out</button></li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
