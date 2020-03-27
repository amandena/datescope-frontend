import React from 'react'
import {connect} from 'react-redux'
import {deleteMessage} from '../actions/deleteMessage'

class Messages extends React.Component {

  handleDelete = (message) => {
    this.props.deleteMessage(message.id, message.user_id)
  }

  render(){
    return(
      <div className='messages'>
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

export default connect(mapStateToProps, {deleteMessage})(Messages)
