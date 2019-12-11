import React from 'react'
import {connect} from 'react-redux'
import {loginUser} from '../actions/loginUser'

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

  handleSubmit = event => {
    event.preventDefault()
    this.props.loginUser(this.state)
    this.setState({
      email: '',
      password: ''
    })
  }

  render() {
    return(
      <div>
        <h2>Welcome Back!</h2>
        <form onSubmit={this.handleSubmit}>
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

export default connect(null, {loginUser})(Login)
