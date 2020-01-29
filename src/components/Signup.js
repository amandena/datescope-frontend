import React from 'react'
import {connect} from 'react-redux'
import {addUser} from '../actions/addUser'

class Signup extends React.Component {
  state = {
    email: '',
    password: '',
    name: '',
    age: '',
    sign: '',
    bio: '',
    gender: '',
    preference: '',
    location: '',
    instagram: ''
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.addUser(this.state)
    this.setState({
      email: '',
      password: '',
      name: '',
      age: '',
      sign: '',
      bio: '',
      gender: '',
      preference: '',
      location: '',
      instagram: ''
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Email: </label>
          <input type='text' placeholder='Email' value={this.state.email} name='email' onChange={this.handleChange} /><br/>

          <label>Password: </label>
          <input type='password' placeholder='Password' value={this.state.password} name='password' onChange={this.handleChange} /><br/>

          <label>Name: </label>
          <input type='text' placeholder='Name' value={this.state.name} name='name' onChange={this.handleChange} /><br/>

          <label>Age: </label>
          <input type='number' placeholder='Age' value={this.state.age} name='age' onChange={this.handleChange} /><br/>

          <label>Sign: </label>
          <select value={this.state.sign} name='sign' onChange={this.handleChange}>
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
          <input type='text' placeholder='Bio' value={this.state.bio} name='bio' onChange={this.handleChange} /><br/>

          <label>Gender: </label>
          <select value={this.state.gender} name='gender' onChange={this.handleChange}>
            <option></option>
            <option>male</option>
            <option>female</option>
          </select><br/>

          <label>Preference: </label>
          <select value={this.state.preference} name='preference' onChange={this.handleChange}>
            <option></option>
            <option>male</option>
            <option>female</option>
            <option>both</option>
          </select><br/>

        <label>Location: </label>
          <input type='text' placeholder='Location' value={this.state.location} name='location' onChange={this.handleChange} /><br/>

          <label>Instagram: </label>
          <input type='text' placeholder='Instagram' value={this.state.instagram} name='instagram' onChange={this.handleChange} /><br/>

          <input type='submit' value='Create Profile' />
        </form>
      </div>
    )
  }
}

export default connect(null, {addUser})(Signup)
