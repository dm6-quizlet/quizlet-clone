import React, { Component } from "react";
import './Dashboard.css'
import SideNav from '../SideNav/SideNav'

class Dashboard extends Component {
  render() {
    return (
      <div className="container dashboard-main-container">
        <div className="dashboard-sidenav-container">
          <SideNav />
        </div>
        <div className="dashboard-content-container">
        </div>
      </div>
    )
  }
}

export default Dashboard
