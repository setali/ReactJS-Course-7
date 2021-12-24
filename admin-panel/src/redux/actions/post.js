import request from '../../tools/request'

export function setPosts (payload) {
  return {
    type: 'POSTS',
    payload
  }
}

export const getPosts = () => (dispatch, getState) => {
  if (!getState()['posts'].length) {
    request('/posts').then(({ data }) => dispatch(setPosts(data)))
  }
}

// export function getPosts () {
//   return (dispatch, getState) => {
//     if (!getState()['posts'].length) {
//       request('/posts').then(({ data }) => dispatch(setPosts(data)))
//     }
//   }
// }
