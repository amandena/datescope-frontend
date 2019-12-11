import React from 'react'
import Messages from './Messages'

const Users = props => {

  return(
    <div>
      {props.users.map(user =>
        <li key={user.id}>
          <h2>{user.name} - {user.age} - {user.sign}</h2>
          <p>{user.bio}</p>
        </li>
      )}
      <Messages messages={this.props.messages} />
    </div>
  )
}

export default Users
