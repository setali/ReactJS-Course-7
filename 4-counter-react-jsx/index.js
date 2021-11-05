const root = document.getElementById('root')

class Counter extends React.Component {
  state = {
    counter: 0
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

const element = React.createElement(Counter)

ReactDOM.render(
  <div>
    {element}
    <Counter />
    <Counter />
    <Counter />
    <Counter />
    <Counter />
    <Counter />
    <Counter />
    <Counter></Counter>
  </div>,
  root
)
