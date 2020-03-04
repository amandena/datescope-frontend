import React from 'react'
import {connect} from 'react-redux'
import {editUser} from '../actions/editUser'
import {resetSignupForm} from '../actions/resetSignupForm'
import {setFormDataForEditUser} from '../actions/setFormDataForEditUser'
import Signup from './Signup'

class UserEditWrapper extends React.Component {

  componentDidMount() {
    this.props.user && this.props.setFormDataForEditUser(this.props.user)
  }

  componentDidUpdate(prevProps) {
    this.props.user && prevProps.user && this.props.setFormDataForEditUser(this.props.user)
  }

  componentWillUnmount() {
    this.props.resetSignupForm()
  }

  handleSubmit = (signupFormData) => {
    const {editUser, history} = this.props
    editUser(signupFormData, history)
  }

  render() {
    return (
      <div>
        <Signup editMode handleSubmit={this.handleSubmit}/>
      </div>
    )
  }

}

export default connect(null, {editUser, setFormDataForEditUser, resetSignupForm})(UserEditWrapper)
