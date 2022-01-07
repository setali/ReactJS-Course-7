import axios from 'axios'
import { BASE_URL } from './constants'
import { getToken } from './utils'

const request = axios.create({
  baseURL: BASE_URL,
  timeout: 1000,
  headers: { 'Content-Type': 'application/json' }
})

request.interceptors.request.use(
  function (config) {
    const token = getToken()
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }

    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

export default request
