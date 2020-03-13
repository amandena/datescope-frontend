export default function currentUser(state = {messages: []}, action) {
  switch (action.type) {
    case 'GET_CURRENT_USER':
      return action.user

    case 'UPDATE_CURRENT_USER_DATA':
      console.log(action.payload)
      return {...state, messages: state.messages.concat(action.payload)}

    case 'CLEAR_CURRENT_USER':
      return {}

    default:
      return state
  }
}
