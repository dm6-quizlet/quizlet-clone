export default function modalReducer(state={showSignUpModal:false, showSignInModal:false}, action) {
  switch(action.type){
    case "TOGGLE_SIGNUP_MODAL":
      return {showSignUpModal:!state.showSignUpModal, showSignInModal: false}
    case "TOGGLE_SIGNIN_MODAL":
      return {showSignInModal:!state.showSignInModal, showSignUpModal: false}
    default:
      return state
  }

}
