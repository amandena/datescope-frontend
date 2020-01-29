import React from 'react'
import {Route, Switch} from 'react-router-dom'
import NavBarContainer from './containers/NavBarContainer'
import UsersContainer from './containers/UsersContainer'
import Signup from './components/Signup'
import Login from './components/Login'
import Logout from './components/Logout'


class App extends React.Component {


  render() {
    return(
      <div>
        <NavBarContainer />
        <Switch>
          <Route path='/signup' component={Signup} />
          <Route path='/login' component={Login} />
          <Route path='/logout' component={Logout} />
        </Switch>
        <UsersContainer />
      </div>
    )
  }
}

export default App
