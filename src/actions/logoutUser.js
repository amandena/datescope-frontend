export const logoutUser = () => {
  return (dispatch) => {
    dispatch({type: 'CLEAR_CURRENT_USER'})
    dispatch({type: 'CLEAR_MESSAGES'})
    fetch('http://localhost:3000/api/v1/logout', {
      credentials: 'include',
      method: 'DELETE'
    })
  }
}
