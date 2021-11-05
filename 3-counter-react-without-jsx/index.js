const root = document.getElementById('root')

class Counter extends React.Component {
  state = {
    counter: 0
  }

  valueElement () {
    return React.createElement('span', {}, this.state.counter)
  }

  increaseButton () {
    return React.createElement(
      'button',
      {
        style: { margin: '5px', marginLeft: '20px' },
        className: 'my-button',
        onClick: () => {
          //   this.state.counter = this.state.counter + 1 // wrong
          this.setState({ counter: this.state.counter + 1 })
        }
      },
      'Increase'
    )
  }

  decreaseButton () {
    return React.createElement(
      'button',
      {
        onClick: () => {
          this.setState({ counter: this.state.counter - 1 })
        }
      },
      'Decrease'
    )
  }

  render () {
    return React.createElement(
      'div',
      {},
      this.valueElement(),
      this.increaseButton(),
      this.decreaseButton()
    )
  }
}

const element = React.createElement(Counter)

ReactDOM.render(element, root)
