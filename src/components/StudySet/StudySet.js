import React, {Component} from 'react';
import './StudySet.css'
import axios from 'axios';
import {Link} from "react-router-dom"
import {connect} from "react-redux"
import {toggleSignInModal} from "../../actions/modal"

class StudySet extends Component {
    constructor() {
        super()
            this.state = {
                studyset:{
                    cards:[

                    ]
                }
            };    
        }

<<<<<<< HEAD
    componentWillMount() {
    axios.get('http://localhost:3001/api/studysets/studysetid/0636ec02-57a9-41ac-8b72-c4bcd744d958')
      .then((response) => {
        console.log(response.data.studyset[0]);
        this.setState({studyset:response.data.studyset[0]})
      }) .catch(function (error) {
        console.log(error);
      });
    }
    render() { 
=======
    render() {
      console.log(this.props);
>>>>>>> master
        let List = this.state.studyset.cards;
        let listOfCards = List.map((card) => {
            console.log('card:',card)
            return (
                <div className='Each-Card'>
                    <div className="Card-Details">
                        <div className="Term-Spacing Text-Display">
                            {card.term}
                        </div>
                    </div>
                    <br />
                    <div className="Card-Details">
                        <div className="Definition-Position Text-Display">
                            {card.definition}
                        </div>
                    </div>
                    <div className="Card-Details">
                        <div>
                            {card.imageURL}
                        </div>
                    </div>
                </div>
            )

        })
        console.log(listOfCards)
<<<<<<< HEAD
=======


>>>>>>> master
        return (
            <div>
                <div>
                    <div className="Study-Page-Header">{/* Name of set, User's name, how many terms, edit, share, addset, info, and more mouseover buttons */}
                        <div className="Study-Page-Header-Container">
                            <div>
                                <span> How many terms </span>
<<<<<<< HEAD
                                 <span>{this.props.username}</span> 
                            </div>  
=======
                                <span> Name of user </span>
                            </div>
>>>>>>> master
                            <div>
                                <h1 className="Term-Header">{this.state.studyset.title}</h1>
                            </div>
                        </div>
                        <div>
                            <div className="Info-Buttons-Container">
                                <div className="Info-Buttons"></div>
                                <div className="Info-Buttons"></div>
                                <div className="Info-Buttons"></div>
                                <div className="Info-Buttons"></div>
                                <div className="Info-Buttons"></div>
                            </div>
                        </div>
                    </div>
                    <div className="Page-Mode-Padding"> {/* Flashcards, Learn, Spell, Test, Match, and Gravity buttons */}
                        <div className="Page-Mode-Container">
                            <Link to="study-set/flashcards">
                            <span className="Page-Mode-Button-Wrapper">
                                <div className="Page-Image-Flashcards">
                                    <img src= {require('../../assets/images/flashcards.png')}/>
                                </div>
                                <div className="Page-Mode-Buttons">
                                    <div className="Page-Mode-Text">Flashcards</div>
                                </div>
                            </span>
                            </Link>
                            <span className="Page-Mode-Button-Wrapper">
                                <div className="Page-Image-Learn">
                                    <img src= {require('../../assets/images/learn.png')}/>
                                </div>
                                <div className="Page-Mode-Buttons">
                                    <div className="Page-Mode-Text">Learn</div>
                                </div>
                            </span>
                            <span className="Page-Mode-Button-Wrapper">
                                <div className="Page-Image-Spell">
                                    <img src= {require('../../assets/images/spell.png')}/>
                                </div>
                                <div className="Page-Mode-Buttons">
                                    <div className="Page-Mode-Text">Spell</div>
                                </div>
                            </span>
                            <span className="Page-Mode-Button-Wrapper">
                                <div className="Page-Image-Test">
                                    <img src= {require('../../assets/images/test.png')}/>
                                </div>
                                <div className="Page-Mode-Buttons">
                                    <div className="Page-Mode-Text">Test</div>
                                </div>
                            </span>
                            <Link to="study-set/match">
                            <span className="Page-Mode-Button-Wrapper">
                                <div className="Page-Image-Match">
                                    <img src= {require('../../assets/images/match.png')}/>
                                </div>
                                <div className="Page-Mode-Buttons">
                                    <div className="Page-Mode-Text">Match</div>
                                </div>
                            </span>
                            </Link>
                            <span className="Page-Mode-Button-Wrapper">
                                <div className="Page-Mode-Buttons">
                                    <div className="Page-Image-Gravity">
                                        <img src= {require('../../assets/images/gravity.png')}/>
                                    </div>
                                    <div className="Page-Mode-Text">Gravity</div>
                                </div>
                            </span>
                        </div>
                    </div>
                        <div className="Study-Set-Background"> {/* Term and definition */}
                            <div className="Study-Set-Container">
                                <div>
                                    {listOfCards}
                                </div>
                            </div>
<<<<<<< HEAD
                        </div> 
                    <div className="Add-Terms-Background"> {/* Add or Remove Terms  */}
                        <div>
                            <Link to="/edit-set">
                                <button className="Add-Terms-Button">Add or Remove Terms</button> 
                            </Link>
=======
                        </div>
                    <div> {/* Add or Remove Terms  */}
                        <div>
                            <div>

                            </div>
>>>>>>> master
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
<<<<<<< HEAD

function mapStateToProps(state) {
    console.log(state.auth.user.username)
  return {
    username: state.auth.user.username
  }
}

export default connect(mapStateToProps, {toggleSignInModal})(StudySet)
=======
>>>>>>> master
