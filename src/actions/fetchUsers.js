export function fetchUsers(userId) {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/users/${userId}/matches`)
      .then(res => res.json())
      .then(users => dispatch({type: 'FETCH_USERS', payload: users}))
  }
}
