import React from 'react'

class Login extends React.Component {
  state = {
    currentUser: null,
    email: '',
    password: ''
  }

  render() {
    return(
      <div>
        Welcome Back!
        <form>
          <label>Email: </label>
          <input type='text' placeholder='Email' name='email' /><br/>
          <label>Password: </label>
          <input type='password' placeholder='Password' name='password' /><br/>
          <input type='submit' value='Login' />
        </form>
      </div>
    )
  }
}

export default Login
