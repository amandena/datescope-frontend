import React from 'react'
import './App.css'
import {Route, Switch, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import NavBarContainer from './containers/NavBarContainer'
import UsersContainer from './containers/UsersContainer'
import NewUserFormWrapper from './components/NewUserFormWrapper'
import Login from './components/Login'
import Home from './components/Home'

import {getCurrentUser} from './actions/getCurrentUser'



class App extends React.Component {
  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    const {currentUser} = this.props
    return(
      <div className="App">
        {currentUser.id ? <NavBarContainer location={this.props.location}/> : <Home/>}
        <Switch>
          <Route exact path='/signup' component={NewUserFormWrapper}/>
          <Route exact path='/login' component={Login}/>
          <Route path='/users' component={UsersContainer}/>
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return ({
    currentUser: state.currentUser
  })
}

export default withRouter(connect(mapStateToProps, {getCurrentUser})(App))
