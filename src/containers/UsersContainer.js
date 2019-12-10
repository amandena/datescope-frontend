import React from 'react'
import {connect} from 'react-redux'
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
        <UserInput />
        <Users users={this.props.users} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    users: state.users
  }
}

export default connect(mapStateToProps, {fetchUsers})(UsersContainer)
