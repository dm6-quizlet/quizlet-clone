import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './SideNav.css'

class SideNav extends Component {
  render() {
    return (
      <div className="container sidenav-main-container">
        <div className="sidenav-content-container">
          <div className="sidenav-header-container sidenav-containers">
            <div className="latest-activity-containers content-containers">
              <i className="fa fa-clock-o" aria-hidden="true"></i>
              <p>Latest Activity</p>
            </div>
            <div className="your-study-sets-container content-containers">
              <i className="fa fa-plus-square" aria-hidden="true"></i>
              <p>Your Study Sets</p>
            </div>
            <div className="settings-container content-containers">
              <i className="fa fa-cog" aria-hidden="true"></i>
              <p>Settings</p>
            </div>
          </div>
          <div className="sidenav-classes-container sidenav-containers">
            <p className="title">Your Classes</p>
            <div className="content-containers">
              <i className="fa fa-user-plus" aria-hidden="true"></i>
              <p>Join a class</p>
            </div>
          </div>
          <div className="sidenav-content-containers sidenav-containers">
            <p className="title">Your Folders</p>
            <div className="content-containers">
              <i className="fa fa-folder-open" aria-hidden="true"></i>
              <p>Create a folder</p>
            </div>
          </div>
          <div className="sidenav-quizletnews-container">
            <div className="quizletnews-header-container">
              <p className="title">Quizlet News</p>
            </div>
            <div className="quizletnews-main-container">
              <img className="quizletnews-image" src="https://img.quizlet.com/vbtVY-700.jpg" />
              <h1>Announcing Quizlet&#39;s all-digital unconference!</h1>
              <p className="blog-by">dadleatherwood posted 22 hrs ago</p>
              <p className="blog-post">As we gear up for back to school here at Quizlet HQ, one of our goals is to create a community for educators to interact with one another and share t…</p>
            </div>
          </div>
          <div className="sidenav-footer-container">
            <div className="footer-container">
              <p>Help Center</p>
            </div>
            <div className="footer-container">
              <p>Privacy Policy</p>
            </div>
            <div className="footer-container">
              <p>Mobile</p>
            </div>
            <div className="footer-container">
              <p>Upgrade</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SideNav
