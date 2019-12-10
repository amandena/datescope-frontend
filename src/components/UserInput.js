import React from 'react'

class UserInput extends React.Component {
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

  render() {
    return(
      <div>
        <form>
          <label>Email: </label>
          <input type='text' placeholder='Email' value={this.state.email} name='email' onChange={this.handleChange} /><br/>
          <label>Password: </label>
          <input type='password' placeholder='Password' value={this.state.password} name='password' onChange={this.handleChange} /><br/>
          <label>Name: </label>
          <input type='text' placeholder='Name' value={this.state.name} name='name' onChange={this.handleChange} /><br/>
          <label>Age: </label>
          <input type='text' placeholder='Age' value={this.state.age} name='age' onChange={this.handleChange} /><br/>
          <label>Sign: </label>
          <input type='text' placeholder='Sign' value={this.state.sign} name='sign' onChange={this.handleChange} /><br/>
          <label>Bio: </label>
          <input type='text' placeholder='Bio' value={this.state.bio} name='bio' onChange={this.handleChange} /><br/>
          <label>Gender: </label>
          <input type='text' placeholder='Gender' value={this.state.gender} name='gender' onChange={this.handleChange} /><br/>
          <label>Preference: </label>
          <input type='text' placeholder='Preference' value={this.state.preference} name='preference' onChange={this.handleChange} /><br/>
          <label>Location: </label>
          <input type='text' placeholder='Location' value={this.state.location} name='location' onChange={this.handleChange} /><br/>
          <label>Instagram: </label>
          <input type='text' placeholder='Instagram' value={this.state.instagram} name='instagram' onChange={this.handleChange} /><br/>
          <input type='submit' />
        </form>
      </div>
    )
  }
}

export default UserInput
