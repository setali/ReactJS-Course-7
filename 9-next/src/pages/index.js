import Main from 'layouts/Main'
import Head from 'next/head'

export default function Home () {
  return (
    <Main>
      <Head>
        <title>NextJS | Contact Page</title>
      </Head>
      <div>Welcome to NextJS</div>
      <h3>{process.env.myName}</h3>
    </Main>
  )
}
