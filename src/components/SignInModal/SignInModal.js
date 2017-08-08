import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import {connect} from 'react-redux'
import {toggleSignInModal} from '../../actions/modal'
import '../SignUpModal/SignUpModal.css'
import axios from 'axios';
import './SignInModal.css'
import {setUser} from '../../actions/auth'
import {BASE_URL} from '../../services/AuthService'

class SignInModal extends Component {
  constructor() {
    super()
      this.state = {
        checked: null,
        signInInput: {
          username: '',
          password: ''
        }
      }
      this.acceptTerms = this.acceptTerms.bind(this)
      this.submitForm = this.submitForm.bind(this)
  }
  acceptTerms() {
        this.setState({checked: !this.state.checked})
    }

  clearIdToken() {
    localStorage.removeItem('id_token');
  }

  clearUserData() {
    localStorage.removeItem('user');
  }

  signOff() {
    localStorage.removeItem('user');
    localStorage.removeItem('id_token');
  }

  storeUserData(token, user){
  localStorage.setItem('id_token', token);
  this.props.setUser(user)
}


  submitForm(e) {
    e.preventDefault()
    const user = {
      username: this.state.signInInput.username,
      password: this.state.signInInput.password
    }

    axios.post(BASE_URL + '/api/users/authenticate', user)
      .then((response) => {
        this.storeUserData(response.data.token, response.data.user)
      })  .catch(function(error) {
        console.log(error);

      });
    this.props.toggleSignInModal()
  }

  handleChange(reference, event) {
    let newInput = this.state.signInInput;
    newInput[reference] = event.target.value;
    this.setState({signInInput: newInput})
  }

  setModal(modalBox) {
    const body = document.querySelector('body')
    const bodyStyle = body.style
    if (!bodyStyle.overflow || bodyStyle.overflow === "auto") {
      bodyStyle.overflow = "hidden"
      modalBox.style.top = body.scrollTop + 'px'
    } else if (bodyStyle.overflow === 'hidden') {
      bodyStyle.overflow = "auto"
    }
  }

    render() {
        let checkClass = "fake-checkbox"
        if (this.state.checked) {
            checkClass += " checked"
        } else if (this.state.checked === false) {
            checkClass += " unchecked"
        }
        return (
            <div className="Modal-Box" ref={modalBox => this.setModal(modalBox)}>
                <div className="Sign-Up-Modal-Box">
                    <div onClick={this.props.toggleSignInModal} className="Exit-X-Container"><span className="Exit-X">&#10005;</span></div>
                    <div>
                      <form onSubmit={this.submitForm}>
                        <div>
                          <button className="Log-In-Google-Button">
                            <img className = "gf_icons" src= {require('../../assets/images/google-image.png')}/>
                            <div className="login-google">Log in with Google</div>
                          </button>
                          <button className="Log-In-Facebook-Button">
                            <img className = "gf_icons" src= {require('../../assets/images/icon_facebook.png')}/>
                            <div className="login-facebook">Log in with Facebook</div>
                          </button>
                        </div>
                        <label className="Input"> {/* Username input */}
                            <div>
                              <input onChange={this.handleChange.bind(this, 'username')} className="Input-Box" type="text"></input>
                            </div>
                            <span className="Input-Label">
                              <span>Username</span>
                            </span>
                        </label>
                        <label className="Input"> {/* Password input */}
                          <div>
                            <input onChange={this.handleChange.bind(this, 'password')} className="Input-Box" type="password"></input>
                          </div>
                          <span className="Input-Label">
                            <span>Password</span>
                          </span>

                        </label>
                        <div className="Log-In-Button-Container">
                          <input type="submit" value="Log in" className="Log-In-Button"/> {/* Sign up button */}
                        </div>
                        <div className="Logged-In-Container">
                            <label className="Checkbox">
                                <input type="checkbox" value={this.state.checked} onChange={this.acceptTerms} name="TOS" />
                                <div className={checkClass}>&#10003;</div>
                                <div className="fake-label">Keep me logged in
                                </div>

                            </label>
                            <div className="Align-Right-Forgot">
                                <div className="Forgot-Password">Forgot password?</div>
                            </div>
                        </div>
                      </form>
                    </div>
                </div>
            </div>
        )
    }
}
export default connect(function(){return {}}, {toggleSignInModal, setUser})(SignInModal)
