import React from 'react'
import UsersContainer from './containers/UsersContainer'
import MessagesContainer from './containers/MessagesContainer'


class App extends React.Component {


  render() {
    return(
      <div>
        <UsersContainer />
        <MessagesContainer />
      </div>
    )
  }
}

export default App
