import Head from 'next/head'
import Main from 'layouts/Main'
import styles from 'styles/contact.module.css'

export default function Contact () {
  return (
    <Main>
      <Head>
        <title>NextJS | Home Page</title>
      </Head>
      <div>
        <h2 className={styles.header}>Contact Us</h2>
        <p className={styles.paragraph}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate
          tempora, itaque eaque eum voluptatem repellendus in, voluptatibus
          excepturi cum ducimus iusto doloremque pariatur aspernatur reiciendis
          nihil consequuntur laudantium labore fugit.
        </p>
      </div>
    </Main>
  )
}
