import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class User extends React.Component {

  render() {
    const {users, currentUser} = this.props
    const user = users[this.props.match.params.id-1]
    
    return(
      <div className='user'>
        <h2>{user ? user.name : null} - {user ? user.age : null} - {user ? user.sign : null}</h2>
        <p>{user ? user.bio : null}</p>
        <Link to={`/users/${currentUser.id}/messenger/${user && user.id}`}>Send Message</Link>
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

export default connect(mapStateToProps)(User)
