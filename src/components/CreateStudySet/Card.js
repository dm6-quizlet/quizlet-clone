import  React, {Component} from 'react';
import ReactDOM from 'react-dom'


class Card extends Component {
  constructor() {
  super()
  this.state = {
    text: ''
  }

}

deleteCard(index) {
    this.props.onDelete(index);
}

handleChange(index, reference, event) {
    this.props.update(index, reference, event)
}

showImageUpload() {

}


render() {
  return (
    <div className="Card" >
    <br/>
    <div className="row">
    <div className="col-md-1">{this.props.index+1}</div>
    <div className="col-md-1"><a onClick={this.deleteCard.bind(this, this.props.index)} href="#">X</a></div>
    <div className="col-md-5"><input onChange={this.handleChange.bind(this, this.props.index, 'term')} value={this.props.term}  ref="term" id="term" type="text"  placeholder="Enter term"/><br/><label>TERM</label></div>
    <div className="col-md-5"><input onChange={this.handleChange.bind(this, this.props.index, 'definition')} value={this.props.definition}  ref="definition" id="definition" type="text"  placeholder="Enter definition"/>
     <a href="#" onClick={this.showImageUpload} > &#128247;</a>
    <br/><label>DEFINITION</label></div>
    </div><br/>

    <div style={{display: 'none'}} className="imageUpload" ref="imageUpload">
    <hr />
    <br />
    <input /><button >Or upload your own image</button>
    </div>
    
    </div>
  )
}
}

export default Card;
