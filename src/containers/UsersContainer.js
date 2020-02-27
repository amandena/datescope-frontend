import React from 'react'
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'
import Users from '../components/Users'
import User from '../components/User'
import UserEdit from '../components/UserEdit'
import Messages from '../components/Messages'
import MessageInput from '../components/MessageInput'

class UsersContainer extends React.Component {

  render() {
    return(
      <div>
        <Switch>
          <Route path='/users/:id/messages' component={Messages}/>
          <Route path='/users/:id/messages/new' component={MessageInput}/>
          <Route path='/users/:id/edit' render={(routerProps) => <UserEdit {...routerProps}/>}/>
          <Route path='/users/:id' render={(routerProps) => <User {...routerProps}/>}/>
          <Route path='/users' render={() => <Users users={this.props.users}/>}/>
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

export default connect(mapStateToProps)(UsersContainer)
