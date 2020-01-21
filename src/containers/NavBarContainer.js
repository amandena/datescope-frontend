import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import Login from '../components/Login'
import Logout from '../components/Logout'

const NavBarContainer = ({currentUser}) => {


  return (
    <div className='navbar'>
      <Link to='/'>Datescope</Link>
      <Link to='/users'>Profiles</Link>
      {currentUser ? <strong>Welcome, {currentUser.name}!</strong> : ''}
      {currentUser ? <Logout /> : <Login />}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps)(NavBarContainer)
