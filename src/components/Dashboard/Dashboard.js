import React, { Component } from "react";
import './Dashboard.css'
import SideNav from '../SideNav/SideNav'

class Dashboard extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="container dashboard-main-container">
        <div className="dashboard-sidenav-container">
          <SideNav />
        </div>
        <div className="dashboard-content-container">
          <div>FUTURE VIEWS</div>
        </div>
      </div>
    )
  }
}

export default Dashboard
