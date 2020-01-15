import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {loginUser} from '../actions/loginUser'

class Login extends React.Component  {
  state = {
    currentUser: null,
    loginForm: {
      email: '',
      password: ''
    }
  }

  handleChange = event => {
    this.setState({
      loginForm: {
        ...this.state.loginForm,
        [event.target.name]: event.target.value
      }
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.loginUser(this.state)
    this.setState({
      loginForm: {
        email: '',
        password: ''
      }
    })
  }
  
  render() {
    return(
      <div>
        <h2>Welcome Back!</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Email: </label>
          <input type='text' placeholder='Email' name='email' value={this.props.email} onChange={this.handleChange} /><br/>
          <label>Password: </label>
          <input type='password' placeholder='Password' name='password' value={this.props.password} onChange={this.handleChange} /><br/>
          <input type='submit' value='Login' />
        </form>
        <p>New to Datescope? Create account <Link to='/users/new'>here</Link>.</p>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    email: state.email,
    password: state.password
  }
}

export default connect(mapStateToProps, {loginUser})(Login)
