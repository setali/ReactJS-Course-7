import React, { Component } from 'react'

export default class Parent extends Component {
  state = { mount: true }

  render () {
    return (
      <div>
        {this.state.mount && <Child />}
        {/* <div style={{ display: this.state.mount ? 'block' : 'none' }}>
          <Child />
        </div> */}
        <button onClick={() => this.setState({ mount: !this.state.mount })}>
          {this.state.mount ? 'UnMount' : 'Mount'}
        </button>
      </div>
    )
  }
}

class Child extends Component {
  state = { counter: 1 }

  componentDidMount () {
    this.intervalId = setInterval(() => {
      this.setState({ counter: this.state.counter + 1 })
    }, 1000)

    console.log(this.intervalId)
  }

  componentWillUnmount () {
    clearInterval(this.intervalId)
  }

  render () {
    return <div>Child: {this.state.counter}</div>
  }
}
