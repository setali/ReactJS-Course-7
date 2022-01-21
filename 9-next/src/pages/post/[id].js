import Main from '../../layouts/Main'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Post ({ post }) {
  //   const {
  //     query: { id }
  //   } = useRouter()

  return (
    <Main>
      <div>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    </Main>
  )
}

export async function getServerSideProps ({ params: { id } }) {
  const url = `https://jsonplaceholder.typicode.com/posts/${id}`
  const { data: post } = await axios(url)

  return {
    props: { post }
  }
}
