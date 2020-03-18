import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div className='login-signup'>
      <h3>Welcome, please <Link to='/login'>Log In</Link>.</h3>
      <p>New to Datescope? Create account <Link to='/signup'>here</Link>.</p>
    </div>
  )
}

export default Home
