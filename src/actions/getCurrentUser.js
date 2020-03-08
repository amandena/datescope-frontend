export const getCurrentUser = () => {
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/get_current_user', {
      credentials: 'include',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(user => {
        if (user.error) {
          alert(user.error)
        } else {
          dispatch({type: 'GET_CURRENT_USER', user: user})
        }
      })
  }
}
