export const editUser = (data, history) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/users/${data.id}`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'PATCH',
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(user => {
        if (user.error) {
          alert(user.error)
        } else {
          dispatch({type: 'EDIT_USER', payload: user})
          dispatch({type: 'RESET_SIGNUP_FORM'})
          history.push('/')
        }
      })
  }
}
