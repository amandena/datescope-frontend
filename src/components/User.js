import React from 'react'

const User = props => {

  return(
    <li>
      <h2>{props.user.name} - {props.user.age} - {props.user.sign}</h2>
      <p>{props.user.bio}</p>
      <p>{props.user.messages.map(message => message.comment)}</p>
    </li>
  )
}

export default User
