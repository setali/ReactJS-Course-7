import Header from 'cmp/Header'
import Footer from 'cmp/Footer'
import Sidebar from 'cmp/Sidebar'
import styles from './main.style'

export default function Main ({ children }) {
  return (
    <div>
      <Header />
      <section style={{ display: 'flex' }}>
        <Sidebar />
        <article>{children}</article>
      </section>

      <Footer />
      <style>{styles}</style>
    </div>
  )
}
