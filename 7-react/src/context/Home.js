import React, { useContext } from 'react'
import ThemeContext from './ThemeContext'
import UserContext from './UserContext'

export default function Home () {
  const theme = useContext(ThemeContext)
  const { user, isLoggedIn } = useContext(UserContext)

  return (
    <div className='box' style={theme}>
      <h2>Home Page</h2>
      {isLoggedIn && <p>Welcome {user.name}</p>}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde nisi
        quaerat deleniti adipisci magni quis animi in voluptas maiores dolores
        voluptates accusamus iste obcaecati ex eligendi dicta harum, numquam ab.
      </p>
    </div>
  )
}
