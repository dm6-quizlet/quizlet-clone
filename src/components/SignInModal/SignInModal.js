import React, { Component } from 'react';
import {connect} from 'react-redux'
import {toggleSignInModal} from '../../actions/modal'
import '../SignUpModal/SignUpModal.css'
import './SignInModal.css'

class SignInModal extends Component {
    render() {
        return (
            <div className="Modal-Box">
                <div className="Sign-In-Modal-Box">
                    <div className="Modal-Header"> {/* Log In Header */}
                        <div>
                            <span>
                                <div className="Right-Container-Button">
                                    <div onClick={this.props.toggleSignInModal}><span className="Exit-X-Circle">&#10005;</span></div>
                                </div>
                            </span>
                            <div className="Left-Container-Login">
                                <div className="">
                                    <h3> Log In </h3>
                                </div>
                            </div>
                        </div>
                    </div>
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
