import React, {Component} from 'react'
import './CreateStudySet.css'
import StudySet from './StudySet';
import AddCard from './AddCard';


class CreateStudySet extends Component {
  render() {
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
          <StudySet/>
          <AddCard />
          <button  id="SubmitBottom" type="submit">Create</button>
       </div>

      </form>
      <hr/>
      </div>
    )
  }
}

export default CreateStudySet
