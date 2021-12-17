import { Divider } from 'antd'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function Full () {
  const { id } = useParams()

  const [person, setPerson] = useState({})

  useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/users/${id}`).then(({ data }) =>
      setPerson(data)
    )
  }, [id])

  return (
    <div>
      <h3>نمایش کاربر</h3>
      <Divider />
      <label>نام:</label>
      <Divider type='vertical' />
      <span>{person.name}</span>
      <Divider />
      <label>ایمیل:</label>
      <Divider type='vertical' />
      <span>{person.email}</span>
      <Divider />
      <Link to='/persons'>بازگشت به لیست کاربران</Link>
    </div>
  )
}
