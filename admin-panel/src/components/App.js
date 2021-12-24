import { Layout } from 'antd'
import { Route, Routes } from 'react-router-dom'
import '../assets/css/general.css'
import Dashboard from './generic/Dashboard'
import Footer from './generic/Footer'
import Header from './generic/Header'
import Page404 from './generic/Page404'
import Sidebar from './generic/Sidebar'
import PersonRouter from './person/Router'
import PostRouter from './post/Router'

const { Content } = Layout

function App () {
  return (
    <div className='App'>
      <Layout style={{ minHeight: '100vh' }}>
        <Header>Header</Header>
        <Layout>
          <Sidebar />
          <Content className='content'>
            <Routes>
              <Route path='/' element={<Dashboard />} />
              <Route path='persons/*' element={<PersonRouter />} />
              <Route path='posts/*' element={<PostRouter />} />
              <Route path='*' element={<Page404 />} />
            </Routes>
          </Content>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>
    </div>
  )
}

export default App
