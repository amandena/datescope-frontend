import React from 'react'

class Login extends React.Component {
  state = {
    currentUser: null,
    email: '',
    password: ''
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return(
      <div>
        Welcome Back!
        <form>
          <label>Email: </label>
          <input type='text' placeholder='Email' name='email' value={this.state.email} onChange={this.handleChange} /><br/>
          <label>Password: </label>
          <input type='password' placeholder='Password' name='password' value={this.state.password} onChange={this.handleChange} /><br/>
          <input type='submit' value='Login' />
        </form>
      </div>
    )
  }
}

export default Login
