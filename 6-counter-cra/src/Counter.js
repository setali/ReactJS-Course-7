import React from 'react'

class Counter extends React.Component {
  state = {
    counter: 2
  }

  render () {
    return (
      <div>
        <span>{this.state.counter}</span>
        <button
          style={{ margin: '5px', marginLeft: '20px' }}
          onClick={() => this.setState({ counter: this.state.counter + 1 })}
        >
          Increase
        </button>
        <button
          onClick={() => this.setState({ counter: this.state.counter - 1 })}
        >
          Decrease
        </button>
      </div>
    )
  }
}

export default Counter
