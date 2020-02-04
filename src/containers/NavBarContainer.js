import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

const NavBarContainer = ({currentUser}) => {


  return (
    <div className='navbar'>
      <Link to='/users'>Profiles</Link>
    {currentUser ? <strong>Welcome, {currentUser.name}! <Link to='/logout'>Logout</Link></strong> : ''}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps)(NavBarContainer)
