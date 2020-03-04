import React from 'react'
import {connect} from 'react-redux'
import {updateSignupForm} from '../actions/updateSignupForm'

const Signup = ({signupFormData, updateSignupForm, history, handleSubmit, editMode}) => {

  const handleChange = event => {
    const {name, value} = event.target
    const updatedFormInfo = {
      ...signupFormData,
      [name]: value
    }
    updateSignupForm(updatedFormInfo)
  }

  return(
    <div>
      <form onSubmit={(event) => {
          event.preventDefault()
          handleSubmit(signupFormData)
        }
      }>
        <label>Email: </label>
        <input type='text' placeholder='Email' value={signupFormData.email} name='email' onChange={handleChange} /><br/>

        <label>Password: </label>
        <input type='password' placeholder='Password' value={signupFormData.password} name='password' onChange={handleChange} /><br/>

        <label>Name: </label>
        <input type='text' placeholder='Name' value={signupFormData.name} name='name' onChange={handleChange} /><br/>

        <label>Age: </label>
        <input type='number' placeholder='Age' value={signupFormData.age} name='age' onChange={handleChange} /><br/>

        <label>Sign: </label>
        <select value={signupFormData.sign} name='sign' onChange={handleChange}>
          <option></option>
          <option>aries</option>
          <option>taurus</option>
          <option>gemini</option>
          <option>cancer</option>
          <option>leo</option>
          <option>virgo</option>
          <option>libra</option>
          <option>scorpio</option>
          <option>sagittarius</option>
          <option>capricorn</option>
          <option>aquarius</option>
          <option>pisces</option>
        </select><br/>

        <label>Bio: </label>
        <input type='text' placeholder='Bio' value={signupFormData.bio} name='bio' onChange={handleChange} /><br/>

        <label>Gender: </label>
        <select value={signupFormData.gender} name='gender' onChange={handleChange}>
          <option></option>
          <option>male</option>
          <option>female</option>
        </select><br/>

        <label>Preference: </label>
        <select value={signupFormData.preference} name='preference' onChange={handleChange}>
          <option></option>
          <option>male</option>
          <option>female</option>
          <option>both</option>
        </select><br/>

      <label>Location: </label>
        <input type='text' placeholder='Location' value={signupFormData.location} name='location' onChange={handleChange} /><br/>

        <label>Instagram: </label>
        <input type='text' placeholder='Instagram' value={signupFormData.instagram} name='instagram' onChange={handleChange} /><br/>

        <input type='submit' value={editMode ? 'Edit Profile' : 'Create Profile'} />
      </form>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    signupFormData: state.signupForm
  }
}

export default connect(mapStateToProps, {updateSignupForm})(Signup)
