import React, { Component } from 'react'

export default class LifeCycle extends Component {
  constructor (props) {
    super(props)
    this.state = {
      counter: 0
    }
    console.log('constructor')
  }

  componentDidMount () {
    console.log('componentDidMount')
    // fetch('https://jsonplaceholder.typicode.com/users/1')
    //   .then(response => response.json())
    //   .then(data => console.log(data))
  }

  componentDidUpdate () {
    console.log('componentDidUpdate')
  }

  static getDerivedStateFromProps (props, state) {
    console.log('getDerivedStateFromProps', props, state)
    if (state.counter % 2) {
      return {
        counter: state.counter + 1
      }
    }

    return null
  }

  shouldComponentUpdate (nextProps, nextState) {
    console.log('shouldComponentUpdate', nextState)

    if (nextState.counter % 4 === 0) {
      return false
    }

    return true
  }

  render () {
    console.log('render')
    return (
      <div>
        Counter: {this.state.counter}
        <button
          //   disabled={this.state.counter >= 10}
          onClick={() => this.setState({ counter: this.state.counter + 1 })}
        >
          +
        </button>
        <button
          onClick={() => this.setState({ counter: this.state.counter - 1 })}
        >
          -
        </button>
      </div>
    )
  }
}
