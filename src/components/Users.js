import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

const Users = ({users}) => {
  return(
    <div>
      {users.users.map((user) =>
        <div key={user.id}>
          <Link to={`/users/${user.id}`}>{user.name}</Link>
        </div>
      )}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    users: state.users
  }
}

export default connect(mapStateToProps)(Users)
