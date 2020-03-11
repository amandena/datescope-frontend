import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'


const Home = ({currentUser}) => {
  return(
    <div>
      <h2>{currentUser.id ? currentUser.name : null} - {currentUser.id ? currentUser.age : null} - {currentUser.id ? currentUser.sign : null}</h2>
      <p>{currentUser.id ? currentUser.bio : null}</p>
      <Link to={`/users/${currentUser.id && currentUser.id}/edit`}>Edit Profile</Link>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps)(Home)
