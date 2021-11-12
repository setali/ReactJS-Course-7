import React, { Component, Fragment } from 'react'

export default class Table extends Component {
  state = { users: [] }

  componentDidMount () {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => this.setState({ users: data }))
  }

  render () {
    return (
      <div>
        <table border={1}>
          {this.state.users.map(user => (
            <tr key={user.id}>
              <Columns user={user} />
            </tr>
          ))}
        </table>
      </div>
    )
  }
}

class Columns extends Component {
  render () {
    const { user } = this.props

    return (
      <>
        <td>{user.name}</td>
        <td>{user.email}</td>
      </>
    )

    // return (
    //   <Fragment>
    //     <td>{user.name}</td>
    //     <td>{user.email}</td>
    //   </Fragment>
    // )
  }
}
