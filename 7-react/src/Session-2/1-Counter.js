import React from 'react'

class Counter extends React.Component {
  state = {
    counter: this.props.defaultValue
  }

  //   constructor (props) {
  //     super(props)
  //     this.state = {
  //       counter: props.defaultValue
  //     }

  //     // this.increase = this.increase.bind(this)
  //   }

  //   increase = () => {
  //     this.setState({ counter: this.state.counter + 1 })
  //   }

  increase () {
    this.setState({ counter: this.state.counter + 1 })
  }

  decrease () {
    this.setState({ counter: this.state.counter - 1 })
  }

  render () {
    return (
      <div>
        Counter: {this.state.counter}
        <button onClick={() => this.increase()}>+</button>
        {/* <button onClick={this.increase}>+</button> */}
        {/* <button onClick={this.increase.bind(this)}>+</button> */}
        <button onClick={() => this.decrease()}>-</button>
      </div>
    )
  }
}

export default Counter
