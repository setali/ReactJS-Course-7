import React, { Component } from 'react'

export default class Stateless extends Component {
  state = {
    users: [
      { id: 1, name: 'Ali' },
      { id: 2, name: 'Eli' },
      { id: 3, name: 'Qoli' },
      { id: 4, name: 'Fati' }
    ]
  }

  render () {
    return (
      <div>
        <div>
          {this.state.users.map(user => (
            <User key={user.id} user={user} />
          ))}
        </div>
      </div>
    )
  }
}

function User (props) {
  return (
    <div>
      <span>Name:</span>
      <span>{props.user.name}</span>
    </div>
  )
}
