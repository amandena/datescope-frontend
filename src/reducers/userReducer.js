export default function userReducer(state = {users: []}, action) {
  switch (action.type) {
    case 'FETCH_USERS':
    console.log(action.payload)
      return {users: action.payload}

    case 'ADD_USER':
      return {...state, users: [...state.users, action.payload]}

    case 'ADD_MESSAGE':
      let users = state.users.map(user => {
        if (user.id === action.payload.id) {
          return action.payload
        } else {
          return user
        }
      })
      return {...state, users: users}

      case 'DELETE_MESSAGE':
        let usersD = state.users.map(user => {
          if (user.id === action.payload.id) {
            return action.payload
          } else {
            return user
          }
        })
        return {...state, users: usersD}

      case 'EDIT_USER':
        let usersE = state.users.map(user => {
          if (user.id === action.payload.id) {
            return action.payload
          } else {
            return user
          }
        })
        return {...state, users: usersE}

    default:
      return state
  }
}
