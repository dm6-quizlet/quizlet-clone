import React, { Component } from 'react';
import {connect} from 'react-redux'
import {toggleSignInModal} from '../../actions/modal'
import '../SignUpModal/SignUpModal.css'
import './SignInModal.css'

class SignInModal extends Component {
    render() {
        return (
            <div className="Modal-Box">
                <div className="Sign-Up-Modal-Box">
                    <div onClick={this.props.toggleSignInModal} className="Exit-X-Container"><span className="Exit-X">&#10005;</span></div>
                    <form onSubmit={this.submitForm}>
                        <label className="Input"> {/* Username input */}
                            <div>
                                <input className="Input-Box" type="text"></input>
                            </div>

                            <span className="Input-Label">
                                <span>Username</span>
                            </span>
                        </label>
                        <label className="Input"> {/* Password input */}
                            <div>
                                <input className="Input-Box" type="text"></input>
                            </div>
                            <span className="Input-Label">
                                <span>Password</span>
                            </span>
                        </label>
                        <input type="submit" value="Sign Up" className="Sign-Up-Button"/> {/* Sign up button */}
                    </form>
                </div>
            </div>
        )
    }
}
export default connect(function(){return {}}, {toggleSignInModal})(SignInModal)
