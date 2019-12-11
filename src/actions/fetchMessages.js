export function fetchMessages() {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/users/${id}`)
      .then(res => res.json())
      .then(messages => dispatch({type: 'FETCH_MESSAGES', payload: messages}))
  }
}
