import React from 'react'
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'
import Login from '../components/Login'
import UserInput from '../components/UserInput'
import Users from '../components/Users'
import User from '../components/User'
import {fetchUsers} from '../actions/fetchUsers'

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.fetchUsers()
  }

  render() {
    return(
      <div>
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/users/new' component={UserInput} />
          <Route path='/users/:id' render={(routerProps) => <User {...routerProps} users={this.props.users} />} />
          <Route path='/users' render={() => <Users users={this.props.users} />} />
        </Switch>
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
