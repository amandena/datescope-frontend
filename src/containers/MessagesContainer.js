import React from 'react'
import {connect} from 'react-redux'
// import {Route} from 'react-router-dom'
import MessageInput from '../components/MessageInput'
import Messages from '../components/Messages'
import {fetchMessages} from '../actions/fetchMessages'

class MessagesContainer extends React.Component {
  // componentDidMount() {
  //   this.props.fetchMessages()
  // }

  render() {
    return(
      <div>
        <Messages messages={this.props.user && this.props.user.messages} />
        <MessageInput messages={this.props.user} />
      </div>
    )
  }
}

export default connect(null, {fetchMessages})(MessagesContainer)

// <Route path='/messages/new' component={MessageInput} />
// <Route path='/messages' render={() => <Messages messages={this.props.messages} />} />
// probably don't need Messages route or component
