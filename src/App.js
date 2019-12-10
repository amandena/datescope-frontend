import React from 'react'
import {connect} from 'react-redux'
import {fetchUsers} from './actions/fetchUsers'

class App extends React.Component {

  componentDidMount() {
    this.props.fetchUsers({type: 'FETCH_USERS', payload: {sign: 'leo'}})
  }

  render() {
    return(
      <div>
        Datescope App
      </div>
    )
  }
}

export default connect(null, {fetchUsers})(App)
