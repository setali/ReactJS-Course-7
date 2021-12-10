import axios from 'axios'
import React, { useContext, useEffect, useMemo, useState } from 'react'
import ThemeContext from './ThemeContext'
import { Link } from 'react-router-dom'

export default function Contact () {
  const theme = useContext(ThemeContext)

  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)

  const [search, setSearch] = useState('')

  useEffect(() => {
    setLoading(true)
    axios('https://jsonplaceholder.typicode.com/posts')
      .then(({ data }) => setPosts(data))
      .finally(() => setLoading(false))
  }, [])

  const filteredPosts = useMemo(() => {
    if (!search) {
      return posts
    }

    return posts.filter(post => post.title.includes(search))
  }, [search, posts])

  return (
    <div className='box' style={{ ...theme, flex: 3 }}>
      {loading ? (
        'Loading.... '
      ) : (
        <>
          <h2>Posts list Page</h2>
          <input value={search} onChange={e => setSearch(e.target.value)} />
          <ol>
            {filteredPosts.map(post => (
              <li key={post.id}>
                <Link to={`/post/${post.id}`}>{post.title}</Link>
              </li>
            ))}
          </ol>
        </>
      )}
    </div>
  )
}
