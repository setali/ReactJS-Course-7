import { combineReducers } from 'redux'
import { persons } from './person'
import { posts, post } from './post'
import { user, isLoggedIn, userIsLoading } from './user'

export default combineReducers({
  persons,
  posts,
  post,
  user,
  isLoggedIn,
  userIsLoading
})

// export default function reducer (state = { persons: [], posts: [] }, action) {
//   switch (action.type) {
//     case 'PERSONS':
//       return { ...state, persons: action.payload }

//     case 'POSTS':
//       return { ...state, posts: action.payload }

//     default:
//       return state
//   }
// }
