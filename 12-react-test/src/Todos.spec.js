import { render, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Todos from './Todos'

test('Test add todo', () => {
  const { getByText, getByPlaceholderText } = render(<Todos />)

  const firstTodo = 'First Todo'

  const input = getByPlaceholderText('todo')
  const button = getByText('Add todo')

  fireEvent.change(input, { target: { value: firstTodo } })
  fireEvent.click(button)

  getByText(firstTodo)
})

test('Test add todo with user event', () => {
  const { getByText, getByPlaceholderText, getByTestId } = render(<Todos />)

  const list = getByTestId('todo-list')
  const input = getByPlaceholderText('todo')
  const button = getByText('Add todo')

  expect(list.childNodes.length).toBe(0)

  const firstTodo = 'First Todo'

  userEvent.type(input, firstTodo)
  userEvent.click(button)

  getByText(firstTodo)

  expect(list.childNodes.length).toBe(1)

  const secondTodo = 'Second Todo'

  userEvent.type(input, secondTodo)
  userEvent.click(button)

  getByText(secondTodo)

  expect(list.childNodes.length).toBe(2)

  userEvent.click(button)
  userEvent.click(button)
  userEvent.click(button)
  userEvent.click(button)
  userEvent.click(button)

  expect(list.childNodes.length).toBe(2)
})
