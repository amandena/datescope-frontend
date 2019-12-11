import React from 'react'
import {connect} from 'react-redux'
import MessageInput from '../components/MessageInput'
import Messages from '../components/Messages'
import {fetchMessages} from '../actions/fetchMessages'

class MessagesContainer extends React.Component {
  componentDidMount() {
    this.props.fetchMessages()
  }
  render() {
    return(
      <div>

      </div>
    )
  }
}
