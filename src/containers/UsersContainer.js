import React from 'react'
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'
import NavBarContainer from './NavBarContainer'
import Login from '../components/Login'
import UserInput from '../components/UserInput'
import Users from '../components/Users'
import User from '../components/User'
import UserEdit from '../components/UserEdit'
import {fetchUsers} from '../actions/fetchUsers'
import {getCurrentUser} from '../actions/getCurrentUser'

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.fetchUsers()
    this.props.getCurrentUser()
  }

  render() {
    return(
      <div>
        <NavBarContainer />
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/users/:id/edit' render={(routerProps) => <UserEdit {...routerProps} user={this.props.user} />} />
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
    users: state.users
  }
}

export default connect(mapStateToProps, {fetchUsers, getCurrentUser})(UsersContainer)
