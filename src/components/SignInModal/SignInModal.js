import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import {connect} from 'react-redux'
import {toggleSignInModal} from '../../actions/modal'
import '../SignUpModal/SignUpModal.css'
import axios from 'axios';
import './SignInModal.css'
import {setUser} from '../../actions/auth'

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
      this.submitForm = this.submitForm.bind(this)
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

    axios.post('http://localhost:3001/api/users/authenticate', user)
      .then((response) => {
        console.log(response.data);
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
    console.log(event.target.value)
    console.log(this.state.signInInput)
  }


    render() {

        return (
            <div className="Modal-Box">
                <div className="Sign-Up-Modal-Box">
                    <div onClick={this.props.toggleSignInModal} className="Exit-X-Container"><span className="Exit-X">&#10005;</span></div>
                    <form onSubmit={this.submitForm}>
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
                                <input onChange={this.handleChange.bind(this, 'password')} className="Input-Box" type="text"></input>
                            </div>
                            <span className="Input-Label">
                                <span>Password</span>
                            </span>
                        </label>
                        <input type="submit" value="Sign in" className="Sign-Up-Button"/> {/* Sign up button */}
                        <input type="button" onClick={this.signOff} value="Sign Out" className="Sign-Up-Button"/> {/* Sign up button */}
                    </form>
                </div>
            </div>
        )
    }
}
export default connect(function(){return {}}, {toggleSignInModal, setUser})(SignInModal)
