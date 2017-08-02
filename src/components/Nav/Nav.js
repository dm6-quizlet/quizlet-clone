import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {toggleSignUpModal, toggleSignInModal} from '../../actions/modal'
import SignUpModal from '../SignUpModal/SignUpModal'
import SignInModal from '../SignInModal/SignInModal'
import { login, logout, isLoggedIn } from '../../services/AuthService';
import {removeUser} from '../../actions/auth'
import './Nav.css'

class Nav extends Component {
  constructor () {
    super()
    this.state = {
      searchText : '',
      loggedIn: false,
      showDropdown: false
    }
    this.beginSearch = this.beginSearch.bind(this)
    this.endSearch = this.endSearch.bind(this)
    this.showDropdown = this.showDropdown.bind(this)
    this.logout = this.logout.bind(this)
  }

  // methods

  beginSearch() {
    window.$(this.navContent).fadeOut()
    window.$(this.newSearch).delay(300).fadeIn()
  }

  endSearch() {
    window.$(this.newSearch).fadeOut()
    window.$(this.navContent).delay(150).fadeIn()
  }

  showDropdown() {
    this.setState({
      showDropdown: !this.state.showDropdown
    })
  }

  logout() {
    logout()
    this.props.removeUser()
  }

  render() {
    console.log(this.props);
    return (
      <div>
      <nav className="Nav">
        <div className="container-fluid">
          <Link to="/Splash" id="quizlet-logo">Quizlet</Link>
            <div className="nav-content" ref={navContent => this.navContent = navContent}>
              <div className="nav-search" onClick={this.beginSearch}>
                <span className="glyphicon glyphicon-search" aria-hidden="true"></span>
                <span>Search</span>
              </div>
              <span className="separator">|</span>
              <div className="nav-create">
                <span className="glyphicon glyphicon-th-large" aria-hidden="true"></span>
                <Link to="/create-set">Create</Link>
              </div>
              <div className="nav-login">
              {
                !isLoggedIn()
                ?
                  <ul>
                    <li id="navbar-login" onClick={this.props.toggleSignInModal}>Log In</li>
                    <li><button type="button" className="sign-up-btn" onClick={this.props.toggleSignUpModal}>Sign Up</button></li>
                  </ul>
                :
                  <ul>
                    <li><div type="button" className="sign-up-btn" id="upgrade-btn">Upgrade to Quizlet Plus</div></li>
                    <li>
                      <div className="username" onClick={this.showDropdown}>{this.props.user.username}</div>
                      {this.state.showDropdown
                      ?
                        <ul className="dropdown" ref={dropdown => this.dropdown = dropdown}>
                          <div className="caret"></div>
                          <li>Your Study Sets</li>
                          <li>Settings</li>
                          <li onClick={this.logout}>Log Out</li>
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
        this.props.showSignUpModal ? <SignUpModal /> : null
      }
      {
        this.props.showSignInModal ? <SignInModal /> : null
      }
      </div>
    )
  }
}

export default connect(function(state){return {
  loggedIn: state.auth.loggedIn,
  user: state.auth.user,
  showSignUpModal: state.modal.showSignUpModal,
  showSignInModal: state.modal.showSignInModal
}},{toggleSignUpModal, toggleSignInModal, removeUser})(Nav)
