export default function currentUser(state = {messages: []}, action) {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return action.user

    case 'UPDATE_CURRENT_USER_DATA':
      console.log(action)
      return action.currentUserData

    case 'CLEAR_CURRENT_USER':
      return {}

    default:
      return state
  }
}
