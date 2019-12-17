export const addMessage = (message, userId) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/users/${userId}/messages`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(message)
    })
      .then(res => res.json())
      .then(message => {
        if (message.error) {
          alert(message.error)
        } else {
          dispatch({type: 'ADD_MESSAGE', payload: message})
        }
      })
  }
}
