import React from 'react'
import NavBarContainer from './containers/NavBarContainer'
import UsersContainer from './containers/UsersContainer'


class App extends React.Component {


  render() {
    return(
      <div>
        <NavBarContainer />
        <UsersContainer />
      </div>
    )
  }
}

export default App
