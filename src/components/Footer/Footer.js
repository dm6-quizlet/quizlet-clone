import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import './Footer.css'

class Footer extends Component {
  render() {
    return (
      <div className="container footer-main-container">
        <div className="row row-1">
          <div className="footer-flex-container">
            <div className="footer-logo">
              <Link to="/splash">Quizlet</Link>
            </div>
            <div className="footer-features">
              <strong className="features">Features</strong>
              <Link to='/splash' className="quizlet-live">Quizlet Live</Link>
              <Link to='/quizletLearn' className="quizlet-learn">Quizlet Learn</Link>
              <Link to='/splash' className="mobile">Mobile</Link>
              <Link to='/splash' className="upgrades">Upgrades</Link>
            </div>
            <div className="footer-help">
              <strong className="help">Help</strong>
              <Link to='/splash' className="help-center">Help Center</Link>
              <Link to='/splash' className="honor-code">Honor Code</Link>
              <Link to='/splash' className="community-guidelines">Community Guidelines</Link>
              <Link to='/students' className="students">Students</Link>
              <Link to='/teachers' className="teachers">Teachers</Link>
            </div>
            <div className="footer-about">
              <strong className="about">About</strong>
              <Link to='/mission' className="mission">Mission</Link>
              <Link to='/splash' className="press">Press</Link>
              <Link to='/splash' className="jobs">Jobs</Link>
              <Link to='/splash' className="testimonials">Testimonials</Link>
              <Link to='/splash' className="privacy">Privacy</Link>
              <Link to='/splash' className="Terms">Terms</Link>
            </div>
            <div className="footer-follow-us">
              <strong className="follow-us">Follow Us</strong>
              <a href="https://www.facebook.com/quizlet">Facebook IMG</a>
              <p>Language</p>
              <select>
                <option value="english-usa" selected>English (USA)</option>
                <option value="deutsh">Deutsh</option>
                <option value="english-uk">English (UK)</option>
                <option value="espanol">Español</option>
                <option value="french">Français (FR)</option>
                <option value="french-ca">Français (QC/CA)</option>
              </select>
            </div>
          </div>
        </div>
        <div className="row row-2">
          <div className="footer-copyright">
          </div>
        </div>
      </div>
    )
  }
}

export default Footer
