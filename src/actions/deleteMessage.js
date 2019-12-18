export const deleteMessage = (messageId, userId) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/users/${userId}/messages/${messageId}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(user => dispatch({type: 'DELETE_MESSAGE', payload: user}))
  }
}
