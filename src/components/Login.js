import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {updateLoginForm} from '../actions/updateLoginForm'
import {loginUser} from '../actions/loginUser'

const Login = ({loginFormData, updateLoginForm, loginUser}) => {
  const handleChange = event => {
    const {name, value} = event.target
    const updatedFormInfo = {
      ...loginFormData,
      [name]: value
    }
    updateLoginForm(updatedFormInfo)
  }

  const handleSubmit = event => {
    event.preventDefault()
    loginUser(loginFormData)
  }


  return(
    <div>
      <h2>Welcome Back!</h2>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Email' name='email' value={loginFormData.email} onChange={handleChange} /><br/>
        <input type='password' placeholder='Password' name='password' value={loginFormData.password} onChange={handleChange} /><br/>
        <input type='submit' value='Login' />
      </form>
      <p>New to Datescope? Create account <Link to='/users/new'>here</Link>.</p>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    loginFormData: state.loginForm
  }
}

export default connect(mapStateToProps, {updateLoginForm, loginUser})(Login)
