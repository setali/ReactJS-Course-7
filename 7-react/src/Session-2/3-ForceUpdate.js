import React, { Component } from 'react'

export default class ForceUpdate extends Component {
  shouldComponentUpdate () {
    console.log('shouldComponentUpdate')
    return false
  }

  componentDidUpdate () {
    console.log('componentDidUpdate')
  }

  render () {
    console.log('render')
    return (
      <div>
        {Math.random()}
        <button onClick={() => this.forceUpdate()}>Get random</button>
      </div>
    )
  }
}
