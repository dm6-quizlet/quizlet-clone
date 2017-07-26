import React, { Component }from "react";
import './SignUpModal.css'
export default class SignUpModal extends Component {
    render() {
        return (
            <div className="UI-Modal-Box">
                <div className="Sign-Up-Modal-Box">
                    <div>Something</div> {/* Sign up with Google */}
                    <div></div> {/* Sign up with Facebook */}
                    <form>
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
                        <button></button> {/* Sign up button */}
                        <div></div>
                    </form>
                </div>
            </div>
        )
    }
}
