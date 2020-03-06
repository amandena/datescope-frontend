import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'


const Home = ({currentUser}) => {

  return(
    <div>
      <h2>{currentUser ? currentUser.name : null} - {currentUser ? currentUser.age : null} - {currentUser ? currentUser.sign : null}</h2>
      <p>{currentUser ? currentUser.bio : null}</p>
      <Link to={`/users/${currentUser && currentUser.id}/edit`}>Edit Profile</Link>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps)(Home)
