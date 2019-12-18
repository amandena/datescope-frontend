export const addMessage = (message, userId) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/users/${userId}/messages`, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(message)
    })
      .then(res => res.json())
      .then(user => dispatch({type: 'ADD_MESSAGE', payload: user}))
  }
}
