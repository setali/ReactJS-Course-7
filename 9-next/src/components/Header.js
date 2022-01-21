export default function Header () {
  return (
    <header>
      <img src='/logo.png' />
      <h2>My Header</h2>
      <style jsx>{`
        img {
          width: 100px;
          padding: 10px;
        }
        header {
          display: flex;
        }
      `}</style>
    </header>
  )
}
