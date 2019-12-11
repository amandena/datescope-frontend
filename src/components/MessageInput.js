import React from 'react'


class MessageInput extends React.Component {
  state = {
    messages: []
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()

    this.setState({

    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>

          <input type='submit' />
        </form>
      </div>
    )
  }
}

export default MessageInput
