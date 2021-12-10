import React, { useContext } from 'react'
import ThemeContext from './ThemeContext'

export default function Contact () {
  const theme = useContext(ThemeContext)

  return (
    <div className='box' style={theme}>
      <h2>Contact Page</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde nisi
        quaerat deleniti adipisci magni quis animi in voluptas maiores dolores
        voluptates accusamus iste obcaecati ex eligendi dicta harum, numquam ab.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
        aspernatur pariatur quos blanditiis sunt maiores? Quaerat libero, eum
        laudantium quam cumque inventore praesentium corporis minus modi
        assumenda dolorum fugiat veniam!
      </p>
    </div>
  )
}
