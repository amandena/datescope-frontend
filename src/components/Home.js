import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

const Home = ({currentUser}) => {
  let userInfo
  if (currentUser.id) {
    userInfo =
      <div>
        <h2>{currentUser.name} - {currentUser.age} - {currentUser.sign}</h2>
        <p>{currentUser.bio}</p>
        <Link to={`/users/${currentUser.id}/edit`}>Edit Profile</Link>
      </div>
  } else {
    userInfo = ''
  }

  return(
    <div className='home'>
      {userInfo}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps)(Home)
