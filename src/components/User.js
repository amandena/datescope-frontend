import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

const User = ({users, match}) => {

  let user = users.users[match.params.id]

  return(
    <div>
      <h2>{user ? user.name : null} - {user ? user.age : null} - {user ? user.sign : null}</h2>
      <p>{user ? user.bio : null}</p>
      <Link to={`/users/${user && user.id}/edit`}>Edit Profile</Link>

    </div>
  )
}

const mapStateToProps = state => {
  return {
    users: state.users
  }
}

export default connect(mapStateToProps)(User)
