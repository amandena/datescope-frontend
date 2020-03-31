import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

const Users = ({users, currentUser}) => {

  return(
    <div className='users'>
      {users ? users.map((user) =>
        <div key={user.id}>
          <Link to={`/users/${currentUser.id}/matches/${user.id}`}>{user.name}</Link>
        </div>
      ) : null}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    users: state.users,
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps)(Users)
