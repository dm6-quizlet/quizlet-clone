import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import './Nav.css'

class Nav extends Component {
  render() {
    return (
      <nav className="Nav">
        <div className="container-fluid">
          <a id="quizlet-logo">Quizlet</a>
          <div className="nav-search">
            <span className="glyphicon glyphicon-search" aria-hidden="true"></span>
            <span>Search</span>
          </div>
          <span className="separator">|</span>

          <div className="nav-create">
            <span className="glyphicon glyphicon-th-large" aria-hidden="true"></span>
            <span>Create</span>
          </div>

          <div className="nav-login">
            <ul>
              <li id="navbar-login">Log In</li>
              <li><button type="button" className="btn btn-default navbar-btn" id="sign-up-btn">Sign Up</button></li>
            </ul>
          </div>

        </div>
      </nav>
    )
  }
}

export default Nav
