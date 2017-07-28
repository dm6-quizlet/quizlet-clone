export default function modalReducer(state={showSignUpModal:false}, action) {
  switch(action.type){
    case "TOGGLE_SIGNUP_MODAL":
      return {showSignUpModal:!state.showSignUpModal}
    default:
      return state
  }

}
