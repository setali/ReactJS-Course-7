import { Divider } from 'antd'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function Full () {
  const { id } = useParams()

  const [post, setPost] = useState({})

  useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/posts/${id}`).then(({ data }) =>
      setPost(data)
    )
  }, [id])

  return (
    <div>
      <h3>نمایش کاربر</h3>
      <Divider />
      <label>عنوان:</label>
      <Divider type='vertical' />
      <span>{post.title}</span>
      <Divider />
      <label>متن:</label>
      <Divider type='vertical' />
      <span>{post.body}</span>
      <Divider />
      <Link to='/posts'>بازگشت به لیست مقالات</Link>
    </div>
  )
}
