// import { useEffect, useState } from 'react'
import Main from '../../layouts/Main'
import Link from 'next/link'
// import axios from 'axios'

export default function Posts ({ posts }) {
  //   const [posts, setPosts] = useState([])

  //   useEffect(() => {
  //     fetch('https://jsonplaceholder.typicode.com/posts')
  //       .then(response => response.json())
  //       .then(data => setPosts(data))
  //   }, [])

  return (
    <Main>
      <h2>Posts list</h2>

      <ol>
        {posts.map(({ id, title }) => (
          <li key={id}>
            <Link href={`/post/${id}`}>
              <a>{title}</a>
            </Link>
          </li>
        ))}
      </ol>
    </Main>
  )
}

export async function getServerSideProps () {
  const url = 'https://jsonplaceholder.typicode.com/posts'

  const response = await fetch(url)
  const posts = await response.json()

  //   const { data: posts } = await axios(url)

  return {
    props: {
      posts
    }
  }
}
