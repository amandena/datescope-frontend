import React from 'react'
import {connect} from 'react-redux'
import {addMessage} from '../actions/addMessage'
import {updateMessageInput} from '../actions/updateMessageInput'
import {updateCurrentUserMessages} from '../actions/updateCurrentUserMessages'

const MessageInput = ({messageInputFormData, updateMessageInput, addMessage, userId, currentUser, updateCurrentUserMessages}) => {

  const handleChange = event => {
    const { name, value } = event.target
    updateMessageInput(name, value)
  }

  const handleSubmit = event => {
    event.preventDefault()
    addMessage(messageInputFormData, userId)
    updateCurrentUserMessages(messageInputFormData)
  }


  return(
    <div>
      <form onSubmit={handleSubmit}>
        <label>Message: </label>
        <input type='text' placeholder='Message' name='comment' value={messageInputFormData.comment} onChange={handleChange}/>
        <input type='submit' value='Send'/>
      </form>
    </div>
  )

}

const mapStateToProps = state => {
  return {
    messageInputFormData: state.messageInputForm,
    userId: state.currentUser.id,
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps, {updateMessageInput, addMessage, updateCurrentUserMessages})(MessageInput)
