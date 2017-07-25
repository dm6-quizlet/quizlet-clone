import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import './Nav.css'

class Nav extends Component {
  render() {
    return (
      <h1 className="container">Hello Nav!<button className="btn btn-primary">Hi</button></h1>
    )
  }
}

export default Nav
