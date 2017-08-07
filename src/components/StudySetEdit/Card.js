import  React, {Component} from 'react';
import ReactDOM from 'react-dom'


class Card extends Component {
  constructor() {
  super()
  this.state = {
    text: '',
    showImageUpload: false,
  }

}

deleteCard(index) {
    this.props.onDelete(index);
}

handleChange(index, reference, event) {
    this.props.update(index, reference, event)
}




render() {
  return (
    <div >
    <br/>
    <div className="Card row">
    <div className="col-md-1 Card-Delete-Container"><div className="Card-Index">{this.props.index+1}</div><div className="Card-Delete"><a onClick={this.deleteCard.bind(this, this.props.index)} href="#">&#x1f5d1;</a></div></div>
    <div className="col-md-5"><input className="Input-Box Card-Input" onChange={this.handleChange.bind(this, this.props.index, 'term')} value={this.props.term}  ref="term" id="term" type="text" placeholder="Enter term"/><br/><label id="l-label" className="Input-Label">TERM</label></div>
    <div className="col-md-6"><input className="Input-Box Card-Input" onChange={this.handleChange.bind(this, this.props.index, 'definition')} value={this.props.definition}  ref="definition" id="definition" type="text" placeholder="Enter definition"/>
<a href="#"className="Card-Input-Buttons" onClick={()=>{this.state.showImageUpload = !this.state.showImageUpload}} > &#128247;</a>
    <br/><label id="l-label" className="Input-Label">DEFINITION</label></div>
    </div>
    {
      this.state.showImageUpload ?
        <div className="Card"><input onChange={this.handleChange.bind(this, this.props.index, 'imageURL')} value={this.props.imageURL} placeholder="Image URL"/></div>
      : null
    }



    </div>
  )
}
}

export default Card;
