import React, {Component} from 'react'
import StudySet from './StudySet'
import AddCard from './AddCard'
import Card from './Card'
import uuid from 'uuid'
import './CreateStudySet.css'



class CreateStudySet extends Component {
  constructor(){
    super();
    this.state = {
      id: uuid.v4(),
      cards: [
        {term: '',
        definition: ''}
      ],
      userId: 1234,
      visibility: 'EVERYONE',
      privelages: 'CREATOR',
      password: ''
    };


    this.handleAddCard =
    this.handleAddCard.bind(this)
  }
  handleAddCard(e) {
    e.preventDefault()
    this.setState({
      cards:[...this.state.cards, ...[{term: '',
              definition: ''}]]
    });
  }

  handleDeleteCard(id) {
    const currentCardToDelete = [...this.state.cards]
    const indexToDelete = id
    // currentCardToDelete.findIndex(
      // function(card, id){
      //   return card.index == id
      // })
    this.setState({
      cards: [...currentCardToDelete.slice(0, indexToDelete),
      ...currentCardToDelete.slice(indexToDelete+1)]
    });
  }

  render() {
    let listOfCards = this.state.cards.map((card, index) =>
    <Card key={index} onDelete={this.handleDeleteCard.bind(this)} keyProp={index} term={card.term} definition={card.definition}/>
  );

    return (

      <div className="CreateStudySet">

      <form>
       <div className="CSDTitleBlock ">
        <div className="CSDTitleBlock-content">
        <div className="row">
          <h1 className="col-md-6">Create a new study set</h1>
          <button className="col-md-6" id="SubmitTop" type="submit">Create</button>
        </div>

        <input type="text" value="" placeholder="Subject, chapter, unit"/><br/>
        <label>TITLE</label><hr/>
        </div>
       </div>

       <div>




       {listOfCards}
       <AddCard onClick={this.handleAddCard} />

       <button  id="SubmitBottom" type="submit">Create</button>
       </div>

      </form>
      <hr/>
      </div>
    )
  }
}

export default CreateStudySet
