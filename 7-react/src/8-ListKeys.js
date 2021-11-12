import React, { Component } from 'react'

export default class Users extends Component {
  state = { users: [] }

  componentDidMount () {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => this.setState({ users: data }))
  }

  render () {
    return (
      <div>
        <h2>Users</h2>

        {this.state.users.map(user => (
          <User key={user.id} user={user} />
        ))}
      </div>
    )
  }
}

class User extends Component {
  render () {
    const { user } = this.props

    return <li>{user.name}</li>
  }
}
