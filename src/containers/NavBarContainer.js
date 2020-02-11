import React from 'react'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import Logout from '../components/Logout'

const NavBarContainer = ({currentUser, loggedIn}) => {


  return (
    <div className='navbar'>
      <NavLink exact to='/'>Datescope|  |</NavLink>
      <NavLink exact to='/users'>Profiles|  |</NavLink>
      <NavLink exact to='/users/:id/messages'>Messages|  |</NavLink>
      {currentUser ? <Logout /> : <NavLink exact to='/login'>Login</NavLink>}
      {loggedIn ? <strong>Welcome, {currentUser.name}!</strong> : ''}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
    loggedIn: !!state.currentUser
  }
}

export default connect(mapStateToProps)(NavBarContainer)
