import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {updateLoginForm} from '../actions/updateLoginForm'
// import {loginUser} from '../actions/loginUser'

const Login = ({loginForm, updateLoginForm}) => {
  const handleChange = event => {
    const {name, value} = event.target
    const updatedFormInfo = {
      ...loginForm,
      [name]: value
    }
    updateLoginForm(updatedFormInfo)
  }

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
        <input type='text' placeholder='Email' name='email' value={loginForm.email} onChange={handleChange} /><br/>
        <input type='password' placeholder='Password' name='password' value={loginForm.password} onChange={handleChange} /><br/>
        <input type='submit' value='Login' />
      </form>
      <p>New to Datescope? Create account <Link to='/users/new'>here</Link>.</p>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    loginForm: state.loginForm
  }
}

export default connect(mapStateToProps, {updateLoginForm})(Login)
