import React, {Component} from 'react'

import Cards from './Cards/Cards';
import AddCard from './Cards/AddCard';


class CreateStudySet extends Component {
  render() {
    return (
      <div className="CreateStudySet">
      <form>
       <div>
        <div>
          <h1>
            Create a new study set
          </h1>
          <button id="SubmitTop" type="submit">Create</button>
        </div>
        <input type="text" value="" placeholder="Subject, chapter, unit"/><br/>
        <label>TITLE</label><hr/>

       </div>
       <div>
        <div className="termCard">
          <Cards/>
        </div>

           <AddCard />
       </div>
                 <button id="SubmitBottom" type="submit">Create</button>
      </form>
      <hr/>
      </div>
    )
  }
}

export default CreateStudySet
