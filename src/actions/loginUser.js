export const loginUser = credentials => {
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/login', {
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({user: credentials})
    })
      .then(res => res.json())
      .then(user => {
        if (user.error) {
          alert(user.error)
        } else {
          dispatch({type: 'SET_CURRENT_USER', user: user})
        }
      })
      .catch(console.log)
  }
}
