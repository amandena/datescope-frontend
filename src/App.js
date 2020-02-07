import React from 'react'
import {Route, Switch, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import NavBarContainer from './containers/NavBarContainer'
import UsersContainer from './containers/UsersContainer'
import Signup from './components/Signup'
import Login from './components/Login'
import Logout from './components/Logout'
import Messages from './components/Messages'
import MessageInput from './components/MessageInput'
import Home from './components/Home'
import {fetchUsers} from './actions/fetchUsers'
import {getCurrentUser} from './actions/getCurrentUser'


class App extends React.Component {
  componentDidMount() {
    this.props.fetchUsers()
    this.props.getCurrentUser()
  }

  render() {
    const {loggedIn} = this.props
    return(
      <div>
        <NavBarContainer />
        <Switch>
          <Route exact path='/' render={(props) => loggedIn ? <Messages {...props} /> : <Home {...props} /> } />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/logout' component={Logout} />
          <Route exact path='/users/:id/messages/new' component={MessageInput} />
        </Switch>
        <UsersContainer />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return ({
    loggedIn: !!state.currentUser
  })
}

export default withRouter(connect(mapStateToProps, {fetchUsers, getCurrentUser})(App))
