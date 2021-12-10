import cookie from 'js-cookie'

export function setToken (token) {
  cookie.set('token', token, { expires: 7 })
}

export function getToken () {
  return cookie.get('token')
}

export function removeToken () {
  cookie.remove('token')
}
