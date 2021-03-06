import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class User extends React.Component {

  render() {
    const {users, currentUser} = this.props
    const user = users.filter(user => user.id == this.props.match.params.id)[0]

    return(
      <div className='user'>
        <h2>{user ? user.name : null} - {user ? user.age : null} - {user ? user.sign : null}</h2>
        <p>{user ? user.bio : null}</p>
        <p>Instagram: {user ? user.instagram : null}</p>
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
