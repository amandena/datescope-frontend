import React from 'react'
// import {Route} from 'react-router-dom'
import MessageInput from '../components/MessageInput'
import Messages from '../components/Messages'

class MessagesContainer extends React.Component {
  // componentDidMount() {
  //   this.props.fetchMessages()
  // }

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

// <Route path='/messages/new' component={MessageInput} />
// <Route path='/messages' render={() => <Messages messages={this.props.messages} />} />
// probably don't need Messages route or component
