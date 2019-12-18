import React from 'react'
import {connect} from 'react-redux'
import {deleteMessage} from '../actions/deleteMessage'

const Messages = props => {

  const handleDelete = (message) => {
    props.deleteMessage(message.id, message.user_id)
  }

  return(
    <div>
      {props.messages && props.messages.map(message => <p key={message.id}>{message.comment}<button onClick={() => handleDelete(message)}>Delete</button></p>)}
    </div>
  )
}

export default connect(null, {deleteMessage})(Messages)
