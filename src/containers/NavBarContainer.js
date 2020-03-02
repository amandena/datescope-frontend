import React from 'react'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import Logout from '../components/Logout'

const NavBarContainer = ({currentUser}) => {


  return (
    <div className='navbar'>
      <NavLink exact to='/'>Datescope|  |</NavLink>
      <NavLink exact to='/users'>Profiles|  |</NavLink>
      <NavLink exact to={`/users/${currentUser && currentUser.id}/messages`}>Messages|  |</NavLink>
      {currentUser.id ? <Logout /> : <NavLink exact to='/login'>Login</NavLink>}
      {currentUser.id ? <strong>Welcome, {currentUser.name}!</strong> : ''}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps)(NavBarContainer)
