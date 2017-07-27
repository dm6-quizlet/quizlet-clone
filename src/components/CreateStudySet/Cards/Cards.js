import React, { Component } from 'react';
import Card from '../Card/Card';





class Cards extends Component {
// deleteProject(id){
//   this.props.onDelete(id);
// }

  render() {
{/*
    let projectItems;
    if (this.props.cards) {
      projectItems = this.props.cards.map(card => {

        return (

          <ProjectItem onDelete={this.deleteProject.bind(this)} key={card.id} card={card} />
        );
}      });
    }*/}

    return (
      <div className="Cards">
        <Card />
      </div>
    );
  }
}

export default Card;
