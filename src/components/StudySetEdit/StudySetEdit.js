import React, {Component} from 'react'
import StudySet from './StudySet'
import AddCard from './AddCard'
import Card from './Card'
import uuid from 'uuid'
import axios from 'axios'
import './StudySetEdit.css'
import {Link} from "react-router-dom"
import {BASE_URL} from '../../services/AuthService'

class CreateStudySet extends Component {
  constructor(){
    super();
    this.state = {
      studysetObject: {
        id: uuid.v4().slice(14,36),
        title: '',
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
        description: '',
        updated: Date.now,
        created: Date.now,
      },
      showDescription: false,
      showImportCard: false,
      visibilitySetting: 0,
      privilageSettings: 0,


    };



    this.handleAddCard =
    this.handleAddCard.bind(this)

    this.rotateVisibilitySettings =
    this.rotateVisibilitySettings.bind(this)

    this.rotatePrivilageSettings =
    this.rotatePrivilageSettings.bind(this)

  }


  rotateVisibilitySettings(e) {
    let arr = ['Everyone', 'Certain classes','People with a password']
    this.state.visibilitySetting;
    if (this.state.visibilitySetting<arr.length-1)
    {this.state.visibilitySetting = this.state.visibilitySetting+1}
    else  {
      this.state.visibilitySetting = 0
    }
    this.state.studysetObject.visibility = arr[this.state.visibilitySetting]
    this.setState({studysetObject: this.state.studysetObject})
  }

  rotatePrivilageSettings(e) {
    let arr = ['Everyone', 'Certain classes','People with a password', 'Just me']
    this.state.privilageSetting;
    if (this.state.privilageSetting<arr.length-1)
    {this.state.privilageSetting = this.state.privilageSetting+1}
    else  {
      this.state.privilageSetting = 0
    }
    this.state.studysetObject.privilages = arr[this.state.privilageSetting]
    this.setState({studysetObject: this.state.studysetObject})
  }



  handleSubmit(e) {
    e.preventDefault()
    let _this = this.state.studysetObject;
    axios.post(BASE_URL + '/api/studysets/create', _this)
      .then(function(response) {
        console.log(response.data);
      }) .catch(function (error) {
        console.log(error);
      });
    console.log(_this.id)
  }

  getMyStudySet(e) {
    axios.get(BASE_URL + '/api/studysets/1234')
    .then(function(response) {
      console.log(response.data);
    }) .catch(function (error) {
      console.log(error);
    });
  }

  handleAddCard(e) {
    e.preventDefault()
    this.setState({studysetObject:{...this.state.studysetObject,
      cards:[...this.state.studysetObject.cards, ...[{term: '',
              definition: '', image: '', id: uuid.v4()}]]
    }});
    console.log(this.state.studysetObject.cards)
  }

  logState(e) {
    e.preventDefault
    console.log(this.state)
  }


  handleDeleteCard(index) {
    const currentCardToDelete = [...this.state.studysetObject.cards];
    const indexToDelete = index
    // currentCardToDelete.findIndex(
    // function(card, id){
    //   return card.index == id
    // })
    this.setState({
      studysetObject:{...this.state.studysetObject,cards: [...currentCardToDelete.slice(0, indexToDelete),
        ...currentCardToDelete.slice(indexToDelete+1)]
      }});
    }

  flipTermsDefinitions(e) {
    e.preventDefault()
      let term = this.state.studysetObject
    }

  handleChange(index, reference, event) {
      let newArray = this.state.studysetObject.cards.slice();
      newArray[index][reference] = event.target.value;
      this.setState({studysetObject:{ ...this.state.studysetObject, cards:[...newArray]}})
    }

    handleChangeDescription(event) {
      let newDescription = event.target.value
      this.setState({
        studysetObject: {...this.state.studysetObject, description:newDescription}
        })

    }

    handleChangeTitle(event) {
      let newTitle = event.target.value
      this.setState({
        studysetObject: {...this.state.studysetObject, title:newTitle}
        })
      }

  render() {
    // Here we are going to map out the array of cards in the studyset's state.
    // We

    let listOfCards = this.state.studysetObject.cards.map((card, index) =>
    <Card key={card.id} onDelete={this.handleDeleteCard.bind(this)} index={index} update={this.handleChange.bind(this)} term={card.term} definition={card.definition}/>
  );

    return (


      <div className="CreateStudySet">

      <form onSubmit={this.handleSubmit.bind(this)}>
       <div className="CSDTitleBlock ">
        <div className="CSDTitleBlock-content">
        <div className="row">
        <Link to="/study-set">
            <h2 className="Page-Title col-md-9">Back to set</h2>
        </Link>
            <input type="submit" value="Create" id="SubmitBottom" className="col-md-3 Create-Set-Button Create-Set-Button-Top"/>

        </div>
        <div>
        <input className="Input-Box" onChange={this.handleChangeTitle.bind(this)} value={this.state.studysetObject.title} type="text" placeholder="Subject, chapter, unit"/><br/>
        <label className="Input-Label">TITLE</label>
        </div>
        <div className="row">
          <div className="col-md-5"><a href="#" onClick={()=>{this.setState({showImportCard: !this.state.showImportCard})}}>+ Import from Word, Excel, Google Docs, etc.</a></div>
          <div className="col-md-3" onClick={this.rotateVisibilitySettings}>Visible to: {this.state.studysetObject.visibility}<br/><a href='#'>Change</a></div>
          <div className="col-md-3" onClick={this.rotatePrivilageSettings}>Can be edited by: {this.state.studysetObject.privilages}<br/><a href='#'>Change</a></div>
          <div className="col-md-1"><div clasName="tooltip" onClick={()=>{this.setState({showDescription: !this.state.showDescription})}}>

            {/* SVG vector image */}
            <svg viewBox="0 0 200 200" xmlns="http://w3.org/2000/svg">
            {!this.state.showDescription?'!':'X'}
              <circle cx="100" cy="50" r="50"/>
            </svg>
            <div className="tooltiptext">Hello</div>
          </div></div>
        </div>
        <br/>
        </div>

        {
          this.state.showDescription ?   <div className="Description Card">
                  <input className="Input-Box" onChange={this.handleChangeDescription.bind(this)} value={this.state.studysetObject.description} type="text" /><br/>
                  <label className="Input-Label" >Description</label>
                  </div>  : (null)
        }

        {
          this.state.showImportCard ?
        <div className="Import Card">
                <textarea type="text" placeholder='Word1  Definition1Word2  Definition2'></textarea>
                </div>
                : null

        }


       </div>


       <div>



       <br/>
       {listOfCards}
       <AddCard onClick={this.handleAddCard} /><br/>
       <div className="create-button-container">
       <input type="submit" value="Create" id="SubmitBottom" className="Create-Set-Button"/>
       </div>
       </div>

      </form>
      <hr/>
      </div>
    )
  }
}

export default CreateStudySet
