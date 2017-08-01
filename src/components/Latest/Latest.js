import React, { Component } from "react";
import './Latest.css'
import SideNav from '../SideNav/SideNav'

class Latest extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="container latest-main-container">
        <div className="latest-sidenav-container">
          <SideNav />
        </div>
        <div className="latest-content-container">
          <div>FUTURE VIEWS</div>
        </div>
      </div>
    )
  }
}

export default Latest
