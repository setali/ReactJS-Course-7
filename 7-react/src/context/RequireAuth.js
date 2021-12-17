import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import UserContext from './UserContext'

export default function RequireAuth ({ children }) {
  const { isLoggedIn, isLoading } = useContext(UserContext)
  const { pathname } = useLocation()

  if (isLoading) {
    return 'Loading ....'
  }

  if (isLoggedIn) {
    return children
  }

  return <Navigate to='/login' state={{ from: pathname }} />
}
