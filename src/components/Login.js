import React from 'react'
import {Link} from 'react-router-dom'

const Login = ({ handleLoginChange, handleLoginSubmit, email, password }) => {

  return(
    <div>
      <h2>Welcome Back!</h2>
      <form onSubmit={handleLoginSubmit}>
        <label>Email: </label>
        <input type='text' placeholder='Email' name='email' value={email} onChange={handleLoginChange} /><br/>
        <label>Password: </label>
        <input type='password' placeholder='Password' name='password' value={password} onChange={handleLoginChange} /><br/>
        <input type='submit' value='Login' />
      </form>
      <p>New to Datescope? Create account <Link to='/users/new'>here</Link>.</p>
    </div>
  )
}

export default Login
