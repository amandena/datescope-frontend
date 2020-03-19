import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

const Users = ({users}) => {
  console.log(users)
  return(
    <div className='users'>
      {users.map((user) =>
        <div key={user.id}>
          <Link to={`/users/${user.id}`}>{user.name}</Link>
        </div>
      )}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    users: state.users.users
  }
}

export default connect(mapStateToProps)(Users)
