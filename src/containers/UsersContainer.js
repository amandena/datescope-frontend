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

class UsersContainer extends React.Component {
  state = {
    currentUser: null,
    loginForm: {
      email: '',
      password: ''
    }
  }

  componentDidMount() {
    this.props.fetchUsers()
  }

  handleLoginChange = event => {
    this.setState({
      loginForm: {
        ...this.state.loginForm,
        [event.target.name]: event.target.value
      }
    })
  }

  handleLoginSubmit = event => {

  }

  render() {
    return(
      <div>
        <NavBarContainer />
        <Switch>
          <Route path='/login' render={() => <Login handleLoginChange={this.handleLoginChange} handleLoginSubmit={this.handleLoginSubmit} email={this.state.loginForm.email} password={this.state.loginForm.password} />} />
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
    users: state.users,
  }
}

export default connect(mapStateToProps, {fetchUsers})(UsersContainer)
