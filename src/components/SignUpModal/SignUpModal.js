import React, { Component }from "react"
import {connect} from 'react-redux'
import {toggleSignUpModal} from '../../actions/modal'
import './SignUpModal.css'
class SignUpModal extends Component {
  constructor(){
    super()
    this.submitForm = this.submitForm.bind(this)
  }

  submitForm(e) {
    e.preventDefault()
    this.props.toggleSignUpModal()
  }
    render() {
        return (
            <div className="UI-Modal-Box">
                <div className="Sign-Up-Modal-Box">
                    <div>Something</div> {/* Sign up with Google */}
                    <div></div> {/* Sign up with Facebook */}
                    <form onSubmit={this.submitForm}>
                        <div> {/*  */}
                            <div></div> {/* Month input */}
                            <div></div> {/* Day input */}
                            <div></div> {/* Year input */}
                            <div></div> {/* onHover all ages */}
                        </div>
                        <label> {/* Username input */}
                            <div>
                                <input></input>
                            </div>
                            <span></span>
                        </label>
                        <label> {/* Email input */}
                            <div>
                                <input></input>
                            </div>
                            <span></span>
                        </label>
                        <label> {/* Password input */}
                            <div>
                                <input></input>
                            </div>
                            <span></span>
                        </label>
                        <div></div> {/* Terms of Service Checkbox */}
                        <input type="submit" value="SignUp"/> {/* Sign up button */}
                        <div></div>
                    </form>
                </div>
            </div>
        )
    }
}

export default connect(function(){return {}},{toggleSignUpModal})(SignUpModal)
