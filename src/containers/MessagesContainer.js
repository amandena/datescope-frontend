import React from 'react'
import MessageInput from '../components/MessageInput'
import Messages from '../components/Messages'

class MessagesContainer extends React.Component {

  render() {
    return(
      <div>
        <Messages/>
        <MessageInput/>
      </div>
    )
  }
}

export default MessagesContainer
