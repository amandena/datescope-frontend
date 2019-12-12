import React from 'react'
import MessagesContainer from '../containers/MessagesContainer'

const User = props => {

  let user = props.users[props.match.params.id - 1]
  console.log(user)

  return(
    <div>
      <h2>{user ? user.name : null} - {user ? user.age : null} - {user ? user.sign : null}</h2>
      <p>{user ? user.bio : null}</p>
      <p>{user ? user.messages.map(message => message.comment) : null}</p>
      <MessagesContainer />
    </div>
  )
}

export default User
