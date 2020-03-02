export const logoutUser = () => {
  return (dispatch) => {
    dispatch({type: 'CLEAR_CURRENT_USER'})
    fetch('http://localhost:3000/api/v1/logout', {
      credentials: 'include',
      method: 'DELETE'
    })
  }
}
