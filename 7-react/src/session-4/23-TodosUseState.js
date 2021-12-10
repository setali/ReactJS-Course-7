import React, { useState } from 'react'

export default function TodosUseState () {
  const [todos, setTodos] = useState([])
  const [task, setTask] = useState('')

  function getId () {
    return todos.length ? todos[todos.length - 1].id + 1 : 1
  }

  function addTodo () {
    if (!task) return

    setTodos(todos => [...todos, { title: task, id: getId() }])
    setTask('')
  }

  function removeTodo (id) {
    setTodos(todos => todos.filter(el => el.id !== id))
  }

  return (
    <div>
      <ol>
        {todos.map(({ id, title }, index) => (
          <li key={id}>
            {id} - {title} - {index}
            <span
              onClick={() => removeTodo(id)}
              style={{ color: 'red', margin: '10px', cursor: 'pointer' }}
            >
              x
            </span>
          </li>
        ))}
      </ol>
      <input type='text' value={task} onChange={e => setTask(e.target.value)} />
      <button onClick={addTodo}>Add</button>
    </div>
  )
}
