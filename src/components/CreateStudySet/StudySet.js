import React, { Component } from 'react';
import Card from './Card';

class StudySet extends Component {
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
      <div className="StudySet">
        <Card />
      </div>
    );
  }
}

export default StudySet;
