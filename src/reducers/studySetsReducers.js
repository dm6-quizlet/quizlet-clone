export function studySetsReducers(state={studySet:[]}, action) {
  switch(action.type){
    case "ADD_TO_STUDY_SET":
    return {studySet:[...state.studySet, ...action.payload]};
    break;
  }
  return state
}
