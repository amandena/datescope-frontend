import React from 'react'

const Users = props => {

  return(
    <div>
      {props.users.map(user =>
        <li key={user.id}>
          <h2>{user.name} - {user.age} - {user.sign}</h2>
          <p>{user.bio}</p>
        </li>
      )}
    </div>
  )
}

export default Users
