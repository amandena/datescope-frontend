export const signup = credentials => {
  return (dispatch) => {
    const userInfo = {
      user: credentials
    }
    fetch('http://localhost:3000/api/v1/signup', {
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(userInfo)
    })
      .then(res => res.json())
      .then(user => {
        if (user.error) {
          alert(user.error)
        } else {
          dispatch({type: 'SET_CURRENT_USER', user: user})
          dispatch({type: 'RESET_SIGNUP_FORM'})
        }
      })
  }
}
