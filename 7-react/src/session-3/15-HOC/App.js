import React, { Component } from 'react'
import Tasks from './Tasks'
import Button from './Button'

export default class App extends Component {
  render () {
    return (
      <div>
        <h3>Tasks</h3>

        <Button permission='add-task'>Add task</Button>

        <Tasks permission='view-task-list' />
      </div>
    )
  }
}
