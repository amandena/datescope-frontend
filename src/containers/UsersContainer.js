import React from 'react'
import {connect} from 'react-redux'
import Login from '../components/Login'
import UserInput from '../components/UserInput'
import Users from '../components/Users'
import {fetchUsers} from '../actions/fetchUsers'
import MessageInput from '../components/MessageInput'
import Messages from '../components/Messages'
import {fetchMessages} from '../actions/fetchMessages'


class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.fetchUsers()
    // this.props.fetchMessages()
  }

  render() {
    return(
      <div>
        <Login /><br/>
        <UserInput /><br/>
        <MessageInput /><br/>
        <Users users={this.props.users} /><br/>
        <Messages messages={this.props.messages} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    users: state.users,
    messages: state.messages
  }
}

const mapDispatchToProps = {
  fetchUsers,
  fetchMessages
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)
