import React from 'react'
import {connect} from 'react-redux'
import {addMessage} from '../actions/addMessage'
import {updateMessageInput} from '../actions/updateMessageInput'

const MessageInput = ({messageInputFormData, updateMessageInput, history}) => {

  const handleChange = event => {
    const { name, value } = event.target
    updateMessageInput(name, value)
  }

  const handleSubmit = event => {
    event.preventDefault()

  }


  return(
    <div>
      <form onSubmit={handleSubmit}>
        <label>Message: </label>
        <input type='text' placeholder='Message' name='comment' value={messageInputFormData.comment} onChange={handleChange} />
        <input type='submit' value='Send' />
      </form>
    </div>
  )

}

const mapStateToProps = state => {
  return {
    messageInputFormData: state.messageInputForm
  }
}

export default connect(mapStateToProps, {updateMessageInput, addMessage})(MessageInput)
