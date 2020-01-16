import React from 'react'
// import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
// import {loginUser} from '../actions/loginUser'

const Login = () => {
  // state = {
  //   currentUser: null,
  //   loginForm: {
  //     email: '',
  //     password: ''
  //   }
  // }
  //
  // handleChange = event => {
  //   this.setState({
  //     loginForm: {
  //       ...this.state.loginForm,
  //       [event.target.name]: event.target.value
  //     }
  //   })
  // }
  //
  // handleSubmit = event => {
  //   event.preventDefault()
  //   this.props.loginUser(this.state)
  //   this.setState({
  //     loginForm: {
  //       email: '',
  //       password: ''
  //     }
  //   })
  // }


  return(
    <div>
      <h2>Welcome Back!</h2>
      <form >
        <label>Email: </label>
        <input type='text' placeholder='Email' name='email' /><br/>
        <label>Password: </label>
        <input type='password' placeholder='Password' name='password' /><br/>
        <input type='submit' value='Login' />
      </form>
      <p>New to Datescope? Create account <Link to='/users/new'>here</Link>.</p>
    </div>
  )

}

export default Login
