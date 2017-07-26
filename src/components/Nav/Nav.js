import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import SignUpModal from '../SignUpModal/SignUpModal'
import './Nav.css'

class Nav extends Component {
  constructor () {
    super()
    this.state = {
      searchText : '',
      showModal: false,
      loggedIn: true,
      showDropdown: false
    }
    this.beginSearch = this.beginSearch.bind(this)
    this.endSearch = this.endSearch.bind(this)
    this.showSignup = this.showSignup.bind(this)
    this.showDropdown = this.showDropdown.bind(this)
  }

  // methods

  beginSearch() {
    console.log("Searching")
    window.$(this.navContent).fadeOut()
    window.$(this.newSearch).delay(300).fadeIn('slow')
  }

  endSearch() {
    window.$(this.newSearch).fadeOut()
    window.$(this.navContent).delay(300).fadeIn()
  }

  showSignup() {
    this.setState({
      showModal: true
    })
  }

  showDropdown() {
    this.setState({
      showDropdown: !this.state.showDropdown
    })
  }

  render() {
    return (
      <div>
      <nav className="Nav">
        <div className="container-fluid">
          <Link to="/dashboard" id="quizlet-logo">Quizlet</Link>

            <div className="nav-content" ref={navContent => this.navContent = navContent}>
              <div className="nav-search" onClick={this.beginSearch}>
                <span className="glyphicon glyphicon-search" aria-hidden="true"></span>
                <span>Search</span>
              </div>
              <span className="separator">|</span>

              <div className="nav-create">
                <span className="glyphicon glyphicon-th-large" aria-hidden="true"></span>
                <Link to="/createStudySet">Create</Link>
              </div>



              <div className="nav-login">
              {
                !this.state.loggedIn
                ?
                  <ul>
                    <li id="navbar-login">Log In</li>
                    <li><button type="button" className="sign-up-btn" onClick={this.showSignup}>Sign Up</button></li>
                  </ul>
                :
                  <ul>
                    <li><div type="button" className="sign-up-btn">Upgrade to Quizlet Plus</div></li>
                    <li>
                      <div className="username" onClick={this.showDropdown}>Username</div>
                      {this.state.showDropdown
                      ?
                      <ul className="dropdown" ref={dropdown => this.dropdown = dropdown}>
                      <li>Your Study Sets</li>
                      <li>Settings</li>
                      <li>Log Out</li>
                      <li className="helpcenter">Help Center</li>
                      <li>Upgrade</li>
                      </ul>
                      :
                      null
                    }

                    </li>
                  </ul>
              }
              </div>
            </div>

            <div className="new-search" ref= {newSearch => this.newSearch = newSearch}>
              <div className="search-input">
                <span className="glyphicon glyphicon-search" aria-hidden="true"></span>
                <input className="search-input-box" type="text" placeholder="Search" />
                <span onClick={this.endSearch} className="glyphicon glyphicon-remove" aria-hidden="true"></span>
              </div>

            </div>


        </div>
      </nav>

      {
        this.state.showModal ? <SignUpModal /> : null
      }
      </div>
    )
  }
}

export default Nav
