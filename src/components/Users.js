import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

const Users = ({users}) => {
  return(
    <div>
      {users.users.map((user, id) =>
        <div key={id}>
          <Link to={`/users/${id}`}>{user.name}</Link>
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
