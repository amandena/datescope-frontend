export default function currentUser(state = {messages: []}, action) {
  switch (action.type) {
    case 'GET_CURRENT_USER':
      return action.user

    case 'UPDATE_CURRENT_USER_DATA':
      const user = (state !== action.payload ? action.payload : state)
      console.log(state)
      return {...state, currentUser: user}

    case 'UPDATE_CURRENT_USER_MESSAGES_DATA':
      return {...state, messages: state.messages.concat(action.payload)}

    case 'DELETE_CURRENT_USER_MESSAGE':
      return {...state, messages: state.messages.filter(message => message === action.payload ? false : true)}

    case 'CLEAR_CURRENT_USER':
      return {}

    default:
      return state
  }
}
