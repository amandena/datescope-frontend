import React from 'react'
import {connect} from 'react-redux'
import {deleteMessage} from '../actions/deleteMessage'

class Messages extends React.Component {

  handleDelete = (message) => {
    deleteMessage(message.id, message.user_id)
  }

  render(){
    return(
      <div>
         {this.props.messages && this.props.messages.map(message => <p key={message.id}>{message.comment}<button onClick={() => this.props.handleDelete(message)}>Delete</button></p>)}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    messages: state.currentUser.messages
  }
}

export default connect(mapStateToProps, {deleteMessage})(Messages)
