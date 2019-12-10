export const addUser = state => {
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/users', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(state)
    })
      .then(res => res.json())
      .then(user => dispatch({type: 'ADD_USER', payload: user}))
  }
}
