import React, { Component } from 'react'

export default class Parent extends Component {
  render () {
    return (
      <div>
        <ErrorBoundaries>
          <Child />
        </ErrorBoundaries>
      </div>
    )
  }
}

class ErrorBoundaries extends Component {
  state = {
    hasError: false
  }

  //   static getDerivedStateFromError (error) {
  //     console.log(error)
  //     return {
  //       hasError: true
  //     }
  //   }

  componentDidCatch (error) {
    this.setState({ hasError: true })
  }

  render () {
    if (this.state.hasError) {
      return 'Ooooops, there is an error'
    }

    return this.props.children
  }
}

class Child extends Component {
  state = { counter: 0 }

  componentDidUpdate (prevProps, prevState) {
    if (prevState.counter === 5) {
      throw new Error('App Crashed')
    }
  }

  render () {
    return (
      <div>
        Child: {this.state.counter}
        <button
          onClick={() => this.setState({ counter: this.state.counter + 1 })}
        >
          +
        </button>
      </div>
    )
  }
}
