import axios from 'axios'
import Main from '../../layouts/Main'

export default function User ({ user = {} }) {
  return (
    <Main>
      <h3>{user.name}</h3>
      <p>{user.email}</p>
    </Main>
  )
}

export async function getStaticPaths () {
  //   const paths = [
  //     { params: { id: '1' } },
  //     { params: { id: '2' } },
  //     { params: { id: '3' } }
  //   ]
  const url = 'https://jsonplaceholder.typicode.com/users'
  const { data: users } = await axios(url)

  users.length = 5

  const paths = users.map(user => ({ params: { id: `${user.id}` } }))

  return {
    paths,
    fallback: true
  }
}

export async function getStaticProps ({ params: { id } }) {
  console.log('getStaticProps user', id)
  const url = `https://jsonplaceholder.typicode.com/users/${id}`
  const { data: user } = await axios(url)

  return {
    props: { user },
    revalidate: 5 // seconds
  }
}
