import React from 'react'
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'
import Users from '../components/Users'
import User from '../components/User'
import UserEditWrapper from '../components/UserEditWrapper'
import Messages from '../components/Messages'
import Messenger from '../components/Messenger'
import {fetchUsers} from '../actions/fetchUsers'

class UsersContainer extends React.Component {

  componentDidMount() {
    const {currentUser} = this.props
    if (currentUser.id) {
      this.props.fetchUsers(currentUser.id)
    }
  }

  render() {
    return(
      <div className='users-container'>
        <Switch>
          <Route path='/users/:id/matches' render={() => <Users users={this.props.users}/>}/>
          <Route path='/users/:id/messenger' render={(routerProps) => <Messenger {...routerProps}/>}/>
          <Route path='/users/:id/messages' render={() => <Messages users={this.props.users}/>}/>
          <Route path='/users/:id/edit' render={(routerProps) => {
              return <UserEditWrapper user={this.props.currentUser} {...routerProps}/>}
            }
          />
          <Route path='/users/:id' render={(routerProps) => <User {...routerProps}/>}/>
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    users: state.users,
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps, {fetchUsers})(UsersContainer)
