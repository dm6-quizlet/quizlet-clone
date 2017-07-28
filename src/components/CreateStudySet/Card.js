import  React, {Component} from 'react';

class Card extends Component {

deleteCard(id) {
    this.props.onDelete(id);
}

render() {
  return (
    <div className="Card" {...this.props}>
    <br/>
    <div className="row">
    <div className="col-md-1">{this.props.keyProp+1}</div>
    <div className="col-md-1"><a onClick={this.deleteCard.bind(this, this.props.keyProp)} href="#">X</a></div>
    <div className="col-md-5"><input type="text" defaultValue={this.props.term} placeholder="Enter term"/><br/><label>TERM</label></div>
    <div className="col-md-5"><input type="text"  placeholder="Enter definition"/><br/><label>DEFINITION</label></div>
    </div><br/>
    <hr />
    </div>
  )
}
}

export default Card;
