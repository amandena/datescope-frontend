import React from 'react'
import {Link} from 'react-router-dom'

class NavBarContainer extends React.Component {

  render() {
    return(
      <div className='navbar'>
        <Link to='/'>Datescope</Link>
        <Link to='/users'>Profiles</Link>
        {this.props.currentUser ? <Link to='/logout'>Logout</Link> : <Link to='/login'>Login</Link>}
      </div>
    )
  }
}

export default NavBarContainer
