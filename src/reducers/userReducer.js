export default function userReducer(state = [], action) {
  switch (action.type) {
    case 'FETCH_USERS':
      return action.payload

    case 'ADD_USER':
      return {...state, users: state.users.concat(action.payload)}

    case 'EDIT_USER':
      const user = (state !== action.payload ? action.payload : state)
      return {...state, ...user}

    default:
      return state
  }
}
