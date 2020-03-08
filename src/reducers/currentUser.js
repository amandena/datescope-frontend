export default function currentUser(state = {messages: []}, action) {
  switch (action.type) {
    case 'GET_CURRENT_USER':
      return action.user

    case 'UPDATE_CURRENT_USER_DATA':
      return action.currentUserData

    case 'CLEAR_CURRENT_USER':
      return {}

    default:
      return state
  }
}
