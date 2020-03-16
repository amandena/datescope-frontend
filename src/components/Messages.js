import React from 'react'
import {connect} from 'react-redux'
import {deleteMessage} from '../actions/deleteMessage'
import {deleteCurrentUserMessage} from '../actions/deleteCurrentUserMessage'

class Messages extends React.Component {

  handleDelete = (message) => {
    this.props.deleteMessage(message.id, message.user_id)
    this.props.deleteCurrentUserMessage(message)
  }

  render(){
    return(
      <div>
        {this.props.messages && this.props.messages.map(message => <p key={message.id}>{message.comment}<button onClick={() => this.handleDelete(message)}>Delete</button></p>)}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    messages: state.currentUser.messages
  }
}

export default connect(mapStateToProps, {deleteMessage, deleteCurrentUserMessage})(Messages)
