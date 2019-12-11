import React from 'react'

const Messages = props => {
  const messages = props.map(message => <li key={message.id}>{message.comment}</li>)

  return(
    <div>
      Messages
      {messages}
    </div>
  )
}

export default Messages
