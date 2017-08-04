export function studySetsReducers(state={studySets:[]}, action) {
  switch(action.type){
    case "CREATE_STUDY_SET":
      return {studySets:[...state.studySets, ...action.payload]};
    default:
      return state
  }
}
