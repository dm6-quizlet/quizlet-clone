import {combineReducers} from 'redux';

//IMPORT REDUCERS TO BE COMBINED
import {studySetsReducers} from './studySetsReducers'
import modalReducer from './modal'
//COMBINE REDUCERS

export default combineReducers({
  studySets: studySetsReducers,
  modal: modalReducer
})
