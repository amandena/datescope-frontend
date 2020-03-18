import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {logoutUser} from '../actions/logoutUser'


const Logout = ({logoutUser, history}) => {
  const handleSubmit = event => {
      event.preventDefault()
      logoutUser()
      history.push('/')
    }

  return(
    <div className='logout'>
      <form onSubmit={handleSubmit}>
        <input type='submit' value='Logout' />
      </form>
    </div>
  )
}

export default withRouter(connect(null, {logoutUser})(Logout))
