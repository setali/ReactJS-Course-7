import request from 'tools/request'
import { createAction } from '@reduxjs/toolkit'
import { message } from 'antd'
import { getToken, removeToken, setToken } from 'tools/utils'

export const setUser = createAction('USER')
export const setIsLoggedIn = createAction('IS_LOGGED_IN')
export const setUserIsLoading = createAction('USER_IS_LOADING')

export function logon (user, saveToken = false) {
  return dispatch => {
    dispatch(setUser(user))
    dispatch(setIsLoggedIn(!!user.id))
    saveToken && setToken(user.email)
  }
}

export function login (data) {
  return dispatch => {
    request('/users/1', { method: 'GET', data })
      .then(({ data }) => {
        dispatch(logon(data, true))
      })
      .catch(e => message.error('نام کاربری یا رمزعبور نادرست است.'))
  }
}

export function getUser () {
  return dispatch => {
    if (getToken()) {
      dispatch(setUserIsLoading(true))
      request('/users/1')
        .then(({ data }) => {
          dispatch(logon(data))
        })
        .finally(() => dispatch(setUserIsLoading(false)))
    }
  }
}

export function logout () {
  return dispatch => {
    dispatch(logon({}))
    removeToken()
  }
}
