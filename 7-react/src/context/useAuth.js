import axios from 'axios'
import { useEffect, useState } from 'react'
import { setToken, getToken, removeToken } from './tools'

export default function useAuth () {
  const [user, setUser] = useState({})
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const token = getToken()

    if (token) {
      getUser()
    } else {
      setIsLoading(false)
    }
  }, [])

  function login () {
    axios('https://jsonplaceholder.typicode.com/users/1').then(response => {
      setUser(response.data)
      setIsLoggedIn(true)
      setToken(response.data.email)
    })
  }

  function getUser () {
    axios('https://jsonplaceholder.typicode.com/users/1', {
      //   headers: {
      //     Authorization: `Bearer ${getToken()}`
      //   }
    })
      .then(response => {
        setUser(response.data)
        setIsLoggedIn(true)
      })
      .finally(() => setIsLoading(false))
  }

  function logout () {
    setUser({})
    setIsLoggedIn(false)
    removeToken()
  }

  return {
    user,
    isLoading,
    isLoggedIn,
    login,
    logout
  }
}
