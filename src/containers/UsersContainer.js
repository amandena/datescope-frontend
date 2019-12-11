import React from 'react'
import {connect} from 'react-redux'
import Login from '../components/Login'
import UserInput from '../components/UserInput'
import Users from '../components/Users'
import {fetchUsers} from '../actions/fetchUsers'

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.fetchUsers()
  }

  render() {
    return(
      <div>
        <Login /><br/>
        <UserInput /><br/>
        <Users users={this.props.users} /><br/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    users: state.users,
  }
}

export default connect(mapStateToProps, {fetchUsers})(UsersContainer)
