import React, { useContext, useEffect, useState } from 'react'
import ThemeContext from './ThemeContext'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function Post () {
  const theme = useContext(ThemeContext)
  const { id } = useParams()

  const [post, setPost] = useState({})

  useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/posts/${id}`).then(({ data }) =>
      setPost(data)
    )
  }, [id])

  return (
    <div className='box' style={{ ...theme, flex: 3 }}>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  )
}
