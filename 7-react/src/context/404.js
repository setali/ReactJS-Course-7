import React, { useContext } from 'react'
import ThemeContext from './ThemeContext'

export default function Page404 () {
  const theme = useContext(ThemeContext)

  return (
    <div className='box' style={{ ...theme, flex: 3 }}>
      <h2>404 Page</h2>
      <p>Page not found</p>
    </div>
  )
}
