import React from 'react'
import {connect} from 'react-redux'
import {deleteMessage} from '../actions/deleteMessage'
import MessageInput from '../components/MessageInput'

class Messenger extends React.Component {

  handleDelete = (message) => {
    this.props.deleteMessage(message.id, message.user_id)
  }

  render(){
    const {users} = this.props
    const messagedUser = users.users[this.props.match.params.id-1]
    return(
      <div>
         <h3>Messages to: {messagedUser && messagedUser.name}</h3>
         {this.props.messages && this.props.messages.map(message => <p key={message.id}>{message.comment}<button onClick={() => this.handleDelete(message)}>Delete</button></p>)}
         <MessageInput/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    messages: state.currentUser.messages,
    users: state.users
  }
}

export default connect(mapStateToProps, {deleteMessage})(Messenger)
