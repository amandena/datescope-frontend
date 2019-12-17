import React from 'react'

const Messages = props => {

  return(
    <div>
      {props.messages && props.messages.map(message => <p key={message.id}>{message.comment}</p>)}
    </div>
  )
}

export default Messages
