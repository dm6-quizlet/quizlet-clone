import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import './Footer.css'

class Footer extends Component {
  render() {
    return (
      <div className="container footer-main-container">
        <div className="row row-1">
          <div className="footer-flex-container">
            <div className="footer-logo links-container">
              <Link to="/splash"><strong>Quizlet</strong></Link>
            </div>
            <div className="footer-features links-container">
              <strong className="features">Features</strong>
              <Link to='/splash' className="quizlet-live links">Quizlet Live</Link>
              <Link to='/quizletLearn' className="quizlet-learn links">Quizlet Learn</Link>
              <Link to='/splash' className="mobile links">Mobile</Link>
              <Link to='/splash' className="upgrades links">Upgrades</Link>
            </div>
            <div className="footer-help links-container">
              <strong className="help">Help</strong>
              <Link to='/splash' className="help-center links">Help Center</Link>
              <Link to='/splash' className="honor-code links">Honor Code</Link>
              <Link to='/splash' className="community-guidelines links">Community Guidelines</Link>
              <Link to='/students' className="students links">Students</Link>
              <Link to='/teachers' className="teachers links">Teachers</Link>
            </div>
            <div className="footer-about links-container">
              <strong className="about">About</strong>
              <Link to='/mission' className="mission links">Mission</Link>
              <Link to='/splash' className="press links">Press</Link>
              <Link to='/splash' className="jobs links">Jobs</Link>
              <Link to='/splash' className="testimonials links">Testimonials</Link>
              <Link to='/splash' className="privacy links">Privacy</Link>
              <Link to='/splash' className="Terms links">Terms</Link>
            </div>
            <div className="footer-follow-us links-container">
              <strong className="follow-us links">Follow Us</strong>
              <div className="social-links">
                <a className="links" href="https://twitter.com/quizlet"><i className="fa fa-twitter icons" aria-hidden="true"></i></a>
                <a className="links" href="https://www.facebook.com/quizlet"><i className="fa fa-facebook icons" aria-hidden="true"></i></a>
              </div>
              <p>Language</p>
              <select className="language-selector">
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
            <p>© 2017 Quizlet Inc.</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer
