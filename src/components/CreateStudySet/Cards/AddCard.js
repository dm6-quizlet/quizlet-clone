import React, { Component } from 'react';


class AddCard extends Component {
  constructor(){
    super();
  //   this.state = {
  //     newCard:{}
  //   }
  }


  // handleSubmit(e){
  //     this.setState({newCard:{
  //       id: uuid.v4(),
  //       term: "",
  //       definition: "",
  //
  //     }}, function(){
  //       console.log(this.state);
  //         this.props.addCard(this.state.newCard)
  //     });
  //   }

  render() {
    return (
          <input type="button" value="Add Card" />
    );
  }
}

export default AddCard;
