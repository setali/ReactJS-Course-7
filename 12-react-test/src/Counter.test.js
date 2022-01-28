import ReactDOM from 'react-dom'
import { render } from '@testing-library/react'
import Counter from './Counter'

describe('Counter test', () => {
  test('Counter testing pure', () => {
    const root = document.createElement('div')
    ReactDOM.render(<Counter />, root)

    const h3 = root.querySelector('h3').textContent
    expect(h3).toBe('My Counter')

    const button = root.querySelector('button').textContent
    expect(button).toBe('Increment')
  })

  test('Testing counter with testing library', () => {
    const { getByText, getByTestId } = render(<Counter />)
    getByText(/my counter/i)
    getByText('Increment')
    const value = getByTestId('counter-value').textContent
    expect(value).toBe('0')
  })

  test('Counter click testing', () => {
    const { getByText, getByTestId } = render(<Counter />)

    const button = getByText('Increment')

    const counterValue = getByTestId('counter-value')

    expect(counterValue.textContent).toBe('0')

    button.click()
    button.click()
    button.click()
    button.click()

    expect(counterValue.textContent).toBe('4')

    button.click()
    button.click()

    expect(counterValue.textContent).toBe('6')
  })
})
