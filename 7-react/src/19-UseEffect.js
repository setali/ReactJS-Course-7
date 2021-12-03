import React, { useState, useEffect } from 'react'

export default function App () {
  const [show, setShow] = useState(true)

  return (
    <div>
      <button onClick={() => setShow(!show)}>{show ? 'Hide' : 'Show'}</button>
      {show && <MyComponent />}
    </div>
  )
}

function MyComponent () {
  const [counter, setCounter] = useState(0)
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)

  //  cDM, cDU, cWU
  useEffect(() => {
    const timeoutId = setTimeout(() => setCounter(counter + 1), 1000)
    console.log('Mount id', timeoutId, counter)

    return () => {
      clearTimeout(timeoutId)
      console.log('UnMount id', timeoutId, counter)
    }
  }, [counter])

  //   Only cWU
  useEffect(() => {
    return () => {
      console.log('salam')
    }
  }, [])

  useEffect(() => {
    const controller = new AbortController()
    const signal = controller.signal

    setLoading(true)
    fetch('https://jsonplaceholder.typicode.com/users', { signal })
      .then(response => response.json())
      .then(data => setUsers(data))
      .finally(() => setLoading(false))

    return () => {
      controller.abort()
    }
  }, [])

  return (
    <div>
      <ol>
        {loading
          ? 'Loading....'
          : users.map(user => <li key={user.id}>{user.name}</li>)}
      </ol>
      <hr />
      <h3>{counter}</h3>
    </div>
  )
}
