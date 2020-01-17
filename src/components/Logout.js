import React from 'react'
import {connect} from 'react-redux'
import {logout} from '../actions/logoutUser'


const Logout = ({logout}) => {

  return(
    <div>
      <form onSubmit={logout}>
        <input type='submit' value='Logout' />
      </form>
    </div>
  )
}

export default connect(null, {logout})(Logout)
