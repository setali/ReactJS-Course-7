import React, { useContext } from 'react'
import ThemeContext from './ThemeContext'
import UserContext from './UserContext'
import { Navigate } from 'react-router-dom'

export default function Page404 () {
  const theme = useContext(ThemeContext)
  const { login, isLoggedIn, isLoading } = useContext(UserContext)

  if (isLoading) {
    return 'Loading ...'
  }

  if (isLoggedIn) {
    return <Navigate to='/' />
  }

  return (
    <div className='box' style={{ ...theme, flex: 3 }}>
      <h2>Login Page</h2>
      <p>
        <input placeholder='username' />
        <input placeholder='password' />
        <button onClick={login}>Login</button>
      </p>
    </div>
  )
}
