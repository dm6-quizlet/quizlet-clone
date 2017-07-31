import React, {Component} from 'react'
import StudySet from './StudySet'
import AddCard from './AddCard'
import Card from './Card'
import uuid from 'uuid'
import axios from 'axios'
import './CreateStudySet.css'



class CreateStudySet extends Component {
  constructor(){
    super();
    this.state = {
      id: uuid.v4().slice(14,36),
      title: 'title',
      cards: [
        {term: '',
        definition: '',
        imageURL: '',
        id: uuid.v4()},
        {term: '',
        definition: '',
        imageURL: '',
        id: uuid.v4()},
        {term: '',
        definition: '',
        imageURL: '',
        id: uuid.v4()},
        {term: '',
        definition: '',
        imageURL: '',
        id: uuid.v4()},
        {term: '',
        definition: '',
        imageURL: '',
        id: uuid.v4()}
      ],
      userId: 1234,
      password: '',
      // can equal 'Everyone',"People with a password", "Certain classes",
      visibility: 'Everyone',
      // can equal "Everyone""Just me","People with a password", "Certain classes",
      privilages: 'Just me',
      updated: Date.now

    };


    this.handleAddCard =
    this.handleAddCard.bind(this)
  }


  handleSubmit(e) {
    e.preventDefault()
    let _this = this.state;
    axios.post('http://localhost:3001/api/studysets/create', _this)
      .then(function(response) {
        console.log(response.data);
      }) .catch(function (error) {
        console.log(error);
      });
    console.log(_this.id)
  }

  getMyStudySet(e) {
    axios.get('http://localhost:3001/api/studysets/1234')
    .then(function(response) {
      console.log(response.data);
    }) .catch(function (error) {
      console.log(error);
    });
  }

  handleAddCard(e) {
    e.preventDefault()
    this.setState({
      cards:[...this.state.cards, ...[{term: '',
              definition: '', image: '', id: uuid.v4()}]]
    });
    console.log(this.state.cards)
  }

  logState(e) {
    e.preventDefault
    console.log(this.state)
  }


  handleDeleteCard(index) {
    const currentCardToDelete = [...this.state.cards];
    const indexToDelete = index
    // currentCardToDelete.findIndex(
    // function(card, id){
    //   return card.index == id
    // })
    this.setState({
      cards: [...currentCardToDelete.slice(0, indexToDelete),
        ...currentCardToDelete.slice(indexToDelete+1)]
      });
    }


  flipTermsDefinitions(e) {
    e.preventDefault()
      let term = this.state
    }

  handleChange(index, reference, event) {
      let newArray = this.state.cards.slice();
      newArray[index][reference] = event.target.value;
      this.setState({cards: [...newArray]})
      console.log(event.target.value)
    }

  render() {
    // Here we are going to map out the array of cards in the studyset's state.
    // We
    let listOfCards = this.state.cards.map((card, index) =>
    <Card key={card.id} onDelete={this.handleDeleteCard.bind(this)} index={index} update={this.handleChange.bind(this)} term={card.term} definition={card.definition}/>
  );

    return (


      <div className="CreateStudySet">

      <form onSubmit={this.handleSubmit.bind(this)}>
       <div className="CSDTitleBlock ">
        <div className="CSDTitleBlock-content">
        <div className="row">

          <h1 className="col-md-9">Create a new study set</h1>
          <button className="col-md-3" id="SubmitTop" type="submit">Create</button>
        </div>
        <div>
        <input type="text" onChange={this.handleChange} defaultValue={this.state.title} placeholder="Subject, chapter, unit"/><br/>
        <label>TITLE</label>
        </div>
        <div className="row">
          <div className="col-md-7"><a href="#">+ Import from Word, Excel, Google Docs, etc.</a></div>
          <div className="col-md-2">Visible to {this.state.visibility}<br/><a href='#'>Change</a></div>
          <div className="col-md-2">Can be edited by: {this.state.privilages}<br/><a href='#'>Change</a></div>
          <div className="col-md-1"><button onClick={this.logState.bind(this)}>1</button><button onClick={this.getMyCards}>2</button><button onClick={this.flipTermsDefinitions.bind(this)}>3</button></div>
        </div>
        <br/>
        </div>
       </div>

       <div>



       <br/>
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
