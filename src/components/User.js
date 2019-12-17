import React from 'react'
import MessagesContainer from '../containers/MessagesContainer'

const User = props => {

  let user = props.users[props.match.params.id - 1]

  return(
    <div>
      <h2>{user ? user.name : null} - {user ? user.age : null} - {user ? user.sign : null}</h2>
      <p>{user ? user.bio : null}</p>
      <MessagesContainer user={user} />
    </div>
  )
}

export default User
