export const loginUser = state => {
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/login', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({user: state})
    })
      .then(res => res.json())
      .then(user => {
        if (user.error) {
          alert(user.error)
        } else {
          dispatch({type: 'LOGIN_USER', payload: user})
        }
      })
  }
}
