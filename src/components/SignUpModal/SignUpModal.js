import React, { Component }from "react"
import {connect} from 'react-redux'
import {toggleSignUpModal} from '../../actions/modal'
import './SignUpModal.css'
import axios from 'axios';
import {setUser} from '../../actions/auth'
import {BASE_URL} from '../../services/AuthService'

class SignUpModal extends Component {
  constructor(){
    super()
        this.state = {
            checked: null,
            signUpInput: {
            	username: '',
            	email: '',
            	password: ''
            }
        }
    this.acceptTerms = this.acceptTerms.bind(this)
    this.submitForm = this.submitForm.bind(this)
  }
    acceptTerms() {
        this.setState({checked: !this.state.checked})
    }
    storeUserData(token, user){
    localStorage.setItem('id_token', token);
    this.props.setUser(user)
  }

  submitForm(e) {
    e.preventDefault()
    axios.post(BASE_URL + '/api/users/register', {
    	username: this.state.signUpInput.username,
    	email: this.state.signUpInput.email,
    	password: this.state.signUpInput.password

    })
      .then(response => {
        this.storeUserData(response.data.token, response.data.user)
      }) .catch(function (error) {
        console.log(error);
      });
    this.props.toggleSignUpModal()
  }

    handleChange(reference, event) {
      let newInput = this.state.signUpInput;
      newInput[reference] = event.target.value;
      this.setState({signUpInput: newInput})
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
            <div className="UI-Modal-Box" ref={modalBox => this.setModal(modalBox)}>
                <div className="Sign-Up-Modal-Box">
                    <div onClick={this.props.toggleSignUpModal} className="Exit-X-Container"><span className="Exit-X">&#10005;</span></div>
                    <div><h4 className="Sign-Up-Row">Sign up with: </h4></div>
                    <div className="Google-Facebook-Row-Container"> {/* Sign up with Google and Facebook*/}
                        <button type="submit" className="Google-Row"><img className = "gf_icons" src= {require('../../assets/images/google-image.png')}/> Google </button>
                        <button type="submit" className="Facebook-Row"><img className = "gf_icons" src= {require('../../assets/images/icon_facebook.png')}/> Facebook </button>
                    </div>
                    <form onSubmit={this.submitForm}>
                        <h4 className="Sign-Up-Row">Or sign up with email: </h4>
                        <div>
                        <div className="dates">
                            <div className="Drop-Down-Menu">
                                 <select className="Drop-Down-Select">
                                     <option value="0">Month</option>
                                     <option value="1">January</option>
                                     <option value="2">February</option>
                                     <option value="3">March</option>
                                     <option value="4">April</option>
                                     <option value="5">May</option>
                                     <option value="6">June</option>
                                     <option value="7">July</option>
                                     <option value="8">August</option>
                                     <option value="9">Septemeber</option>
                                     <option value="10">October</option>
                                     <option value="11">November</option>
                                     <option value="12">December</option>
                                 </select>
                             </div>                              {/* Month input */}
                             <div className="Drop-Down-Menu">
                                 <select className="Drop-Down-Select">
                                     <option value="0">Day</option>
                                     <option value="1">1</option>
                                     <option value="2">2</option>
                                     <option value="3">3</option>
                                     <option value="4">4</option>
                                     <option value="5">5</option>
                                     <option value="6">6</option>
                                     <option value="7">7</option>
                                     <option value="8">8</option>
                                     <option value="9">9</option>
                                     <option value="10">10</option>
                                     <option value="11">11</option>
                                     <option value="12">12</option>
                                     <option value="13">13</option>
                                     <option value="14">14</option>
                                     <option value="15">15</option>
                                     <option value="16">16</option>
                                     <option value="17">17</option>
                                     <option value="18">18</option>
                                     <option value="19">19</option>
                                     <option value="20">20</option>
                                     <option value="21">21</option>
                                     <option value="22">22</option>
                                     <option value="23">23</option>
                                     <option value="24">24</option>
                                     <option value="25">25</option>
                                     <option value="26">26</option>
                                     <option value="27">27</option>
                                     <option value="28">28</option>
                                     <option value="29">29</option>
                                     <option value="30">30</option>
                                     <option value="31">31</option>
                                 </select>
                             </div>                              {/* Day input */}
                             <div className="Drop-Down-Menu">
                                 <select className="Drop-Down-Select">
                                     <option value="2017">2017</option>
                                     <option value="2016">2016</option>
                                     <option value="2015">2015</option>
                                     <option value="2014">2014</option>
                                     <option value="2013">2013</option>
                                     <option value="2012">2012</option>
                                     <option value="2011">2011</option>
                                     <option value="2010">2010</option>
                                     <option value="2009">2009</option>
                                     <option value="2008">2008</option>
                                     <option value="2007">2007</option>
                                     <option value="2006">2006</option>
                                     <option value="2005">2005</option>
                                     <option value="2004">2004</option>
                                     <option value="2003">2003</option>
                                     <option value="2002">2002</option>
                                     <option value="2001">2001</option>
                                     <option value="2000">2000</option>
                                     <option value="1999">1999</option>
                                     <option value="1998">1998</option>
                                     <option value="1997">1997</option>
                                     <option value="1996">1996</option>
                                     <option value="1995">1995</option>
                                     <option value="1994">1994</option>
                                     <option value="1993">1993</option>
                                     <option value="1992">1992</option>
                                     <option value="1991">1991</option>
                                     <option value="1990">1990</option>
                                     <option value="1989">1989</option>
                                     <option value="1988">1988</option>
                                     <option value="1987">1987</option>
                                     <option value="1986">1986</option>
                                     <option value="1985">1985</option>
                                     <option value="1984">1984</option>
                                     <option value="1983">1983</option>
                                     <option value="1982">1982</option>
                                     <option value="1981">1981</option>
                                     <option value="1980">1980</option>
                                     <option value="1979">1979</option>
                                     <option value="1978">1978</option>
                                     <option value="1977">1977</option>
                                     <option value="1976">1976</option>
                                     <option value="1975">1975</option>
                                     <option value="1974">1974</option>
                                     <option value="1973">1973</option>
                                     <option value="1972">1972</option>
                                     <option value="1971">1971</option>
                                     <option value="1970">1970</option>
                                     <option value="1969">1969</option>
                                     <option value="1968">1968</option>
                                     <option value="1967">1967</option>
                                     <option value="1966">1966</option>
                                     <option value="1965">1965</option>
                                     <option value="1964">1964</option>
                                     <option value="1963">1963</option>
                                     <option value="1962">1962</option>
                                     <option value="1961">1961</option>
                                     <option value="1960">1960</option>
                                     <option value="1959">1959</option>
                                     <option value="1958">1958</option>
                                     <option value="1957">1957</option>
                                     <option value="1956">1956</option>
                                     <option value="1955">1955</option>
                                     <option value="1954">1954</option>
                                     <option value="1953">1953</option>
                                     <option value="1952">1952</option>
                                     <option value="1951">1951</option>
                                     <option value="1950">1950</option>
                                 </select>
                            </div>
                            </div>                              {/* Year input */}
                            <div className="Birthday-Title-Container">
                            <span className="Birthday-Title">Birthday</span>
                            </div>
                        </div>
                        <label className="Input"> {/* Username input */}
                            <div>
                            <div>
                                <input onChange={this.handleChange.bind(this, 'username')} className="Input-Box" type="text"></input>
                            </div>

                            <span className="Input-Label">
                                <span>Username</span>
                            </span>
                            </div>
                        </label>
                        <label className="Input"> {/* Email input */}
                            <div>
                                <input onChange={this.handleChange.bind(this, 'email')} className="Input-Box" type="email"></input>
                            </div>

                            <span className="Input-Label">
                                <span>Email</span>
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
                        <div className="TOS-Container">
                            <label className="Checkbox">
                                <input type="checkbox" value={this.state.checked} onChange={this.acceptTerms} name="TOS" />
                                <div className={checkClass}>&#10003;</div>
                                <div className="fake-label">no color</div>
                            </label>
                        </div> {/* Terms of Service Checkbox */}
                        <input type="submit" value="Sign Up" className="Sign-Up-Button"/> {/* Sign up button */}
                        <div className="Bottom-Sign-Up"><span>Already have an account? Log in</span></div>
                        <div className="Privacy-Image">
                            <img src={require('../../assets/images/seal.png')} />
                        </div>
                        <div className="No-Spam-Container">
                            <span className="No-Spam">Quizlet will never sell your email information to any third parties. We hate spam just as much as you do.</span>
                        </div>
                        <div></div>
                    </form>
                </div>
            </div>
        )
    }
}

export default connect(function(){return {}},{toggleSignUpModal, setUser})(SignUpModal)
