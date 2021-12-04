import { Layout } from 'antd'
import Header from './generic/Header'
import Footer from './generic/Footer'
import Sidebar from './generic/Sidebar'
import '../assets/css/general.css'

const { Sider, Content } = Layout

function App () {
  return (
    <div className='App'>
      <Layout style={{ minHeight: '100vh' }}>
        <Header>Header</Header>
        <Layout>
          <Sidebar />
          <Content>Content</Content>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>
    </div>
  )
}

export default App
