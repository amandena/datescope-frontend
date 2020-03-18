import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

const User = ({users, match}) => {

  let user = users.users[match.params.id-1]

  return(
    <div className='user'>
      <h2>{user ? user.name : null} - {user ? user.age : null} - {user ? user.sign : null}</h2>
      <p>{user ? user.bio : null}</p>
      <Link to={`/users/${user && user.id}/messenger`}>Send Message</Link>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    users: state.users
  }
}

export default connect(mapStateToProps)(User)
