import {combineReducers} from 'redux';

//IMPORT REDUCERS TO BE COMBINED
import {studySetsReducers} from './studySetsReducers';
//COMBINE REDUCERS

export default combineReducers({
  studySets: studySetsReducers
})
