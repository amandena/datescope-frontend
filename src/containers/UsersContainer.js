import React from 'react'
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'
// import Signup from '../components/Signup'
import Users from '../components/Users'
import User from '../components/User'
import UserEditWrapper from '../components/UserEditWrapper'
import MessagesContainer from './MessagesContainer'

class UsersContainer extends React.Component {

  render() {
    return(
      <div>
        <Switch>
          <Route path='/users/:id/messages' render={() => <MessagesContainer users={this.props.users}/>}/>
          <Route path='/users/:id/edit' render={(routerProps) => {
              return <UserEditWrapper user={this.props.currentUser} {...routerProps}/>}
            }
          />
          <Route path='/users/:id' render={(routerProps) => <User {...routerProps}/>}/>
          <Route path='/users' render={() => <Users users={this.props.users}/>}/>
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

export default connect(mapStateToProps)(UsersContainer)
