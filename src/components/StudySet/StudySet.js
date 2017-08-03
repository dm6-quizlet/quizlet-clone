import React, {Component} from 'react';
import './StudySet.css'
import axios from 'axios';

export default class StudySet extends Component {
    constructor() {
        super()
            this.state = {};
            this.state.studyset = {
                id: '',
                title: '',
                cards: [
                    {
                        term: 'term1',
                        definition: 'Oooooooooooooeoeoeoeoeoeoeoeoeoeoeoeoealskdfjalsdkjflaskdjfalskjfdoeoeoeoeoeoeoeoeoeoeeooooeoeoeoeoeoeoeoeoeoeoeoeoeoeoeoeeo',
                        imageURL: '',
                        id: 'asdiahouha',
                    },
                    {
                        term: 'term2',
                        definition: 'def2',
                        imageURL: '',
                        id: 'asdhoahrega',
                    }
                ],
            }
    }

    render() {
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
          

        return (
            <div>
                <div>
                    <div className="Study-Page-Header">{/* Name of set, User's name, how many terms, edit, share, addset, info, and more mouseover buttons */}
                        <div className="Study-Page-Header-Container">
                            <div>
                                <span> How many terms </span>
                                <span> Name of user </span>
                            </div>  
                            <div>
                                <h1 className="Term-Header">Name of term </h1>
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
                            <span className="Page-Mode-Button-Wrapper">
                                <div className="Page-Image-Flashcards">
                                    <img src= {require('../../assets/images/flashcards.png')}/>
                                </div>
                                <div className="Page-Mode-Buttons">
                                    <div className="Page-Mode-Text">Flashcards</div>
                                </div>
                            </span>
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
                            <span className="Page-Mode-Button-Wrapper">
                                <div className="Page-Image-Match">
                                    <img src= {require('../../assets/images/match.png')}/>
                                </div>
                                <div className="Page-Mode-Buttons">
                                    <div className="Page-Mode-Text">Match</div>
                                </div>
                            </span>
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
                        </div> 
                    <div> {/* Add or Remove Terms  */}
                        <div>
                            <div>
                                
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        )
    }
}