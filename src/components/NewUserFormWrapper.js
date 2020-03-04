import React from 'react'
import {connect} from 'react-redux'
import {signup} from '../actions/signup'
import Signup from './Signup'

const NewUserFormWrapper = ({history, signup}) => {

  const handleSubmit = (signupFormData, history) => {
    signup(signupFormData, history)
  }

  return (
    <div>
      <Signup history={history} handleSubmit={handleSubmit}/>
    </div>
  )
}

export default connect(null, {signup})(NewUserFormWrapper)
