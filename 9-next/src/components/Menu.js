import Link from 'next/link'

export default function Menu () {
  return (
    <menu>
      <ul>
        <li>
          <Link href='/'>
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href='/about'>
            <a>About us</a>
          </Link>
        </li>
        <li>
          <Link href='/contact'>
            <a>Contact us</a>
          </Link>
        </li>
        <li>
          <Link href='/post'>
            <a>Posts</a>
          </Link>
        </li>
        <li>
          <Link href='/user'>
            <a>Users</a>
          </Link>
        </li>
      </ul>
      <style jsx>{`
        menu {
          width: 120px;
          padding: 0;
        }
        li {
          list-style-type: none;
        }
      `}</style>
    </menu>
  )
}
