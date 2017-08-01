const initialState ={
  loggedIn: false,
  user: {}
}

export default function authReducer (state = initialState, action) {
  switch(action.type) {
    case 'SET_USER':
      return Object.assign({},state,{loggedIn:true, user:action.payload})
    case 'REMOVE_USER':
      return initialState
    default:
      return state
  }
}
