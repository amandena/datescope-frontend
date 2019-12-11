import React from 'react'

const Messages = props => {

  return(
    <div>
      Messages
      {props.messages.map(message => <li key={message.id}>{message.comment}</li>)}
    </div>
  )
}

export default Messages
