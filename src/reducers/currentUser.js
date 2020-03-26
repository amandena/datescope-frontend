export default function currentUser(state = {}, action) {
  switch (action.type) {
    case 'GET_CURRENT_USER':
      return action.user

    case 'UPDATE_CURRENT_USER_DATA':
      const user = (state !== action.payload ? action.payload : state)
      return {...state, ...user}

    case 'ADD_MESSAGE':
      const userA = (state !== action.payload ? action.payload : state)
      return {...state, ...userA}

    case 'DELETE_MESSAGE':
      const userD = (state !== action.payload ? action.payload : state)
      return {...state, ...userD}

    case 'CLEAR_CURRENT_USER':
      return {}

    default:
      return state
  }
}
