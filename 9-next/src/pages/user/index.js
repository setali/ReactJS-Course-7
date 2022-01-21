import axios from 'axios'
import Link from 'next/link'
import Main from '../../layouts/Main'

export default function Users ({ users }) {
  return (
    <Main>
      <h3>Users List</h3>
      <ol>
        {users.map(user => (
          <Link key={user.id} href={`/user/${user.id}`}>
            <a>
              <li> {user.name}</li>
            </a>
          </Link>
        ))}
      </ol>
    </Main>
  )
}

export async function getStaticProps () {
  console.log('getStaticProps')
  const url = 'https://jsonplaceholder.typicode.com/users'
  const { data: users } = await axios(url)

  return {
    props: { users },
    revalidate: 5 // seconds
  }
}
