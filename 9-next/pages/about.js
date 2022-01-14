import Main from '../layouts/Main'

export default function About () {
  const color = 'green'

  return (
    <Main>
      <div>
        <h2>About us</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos,
          odit reprehenderit voluptas nihil voluptate et. Aperiam unde provident
          officia aliquam ad distinctio, nihil amet architecto alias placeat eos
          tempora ipsam.
        </p>
      </div>
      <style jsx>{`
        h2 {
          color: ${color};
        }
        p {
          color: aqua;
          padding: 10px;
        }
      `}</style>
    </Main>
  )
}
