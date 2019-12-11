import React from 'react'


class MessageInput extends React.Component {
  state = {
    messages: {
      comment: ''
    }
  }

  handleChange = event => {
    this.setState({
      messages: {
        [event.target.name]: event.target.value
      }
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    
    this.setState({
      messages: {
        comment: ''
      }
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Message: </label>
          <input type='text' placeholder='Message' value={this.state.messages.comment} name='comment' onChange={this.handleChange} />
          <input type='submit' />
        </form>
      </div>
    )
  }
}

export default MessageInput
