import React from 'react'
// import {Route} from 'react-router-dom'
import MessageInput from '../components/MessageInput'
import Messages from '../components/Messages'

class MessagesContainer extends React.Component {

  render() {
    return(
      <div>
        <Messages messages={this.props.user && this.props.user.messages} />
        <MessageInput user={this.props.user} />
      </div>
    )
  }
}

export default MessagesContainer
