import { getUser } from 'actions/user'
import { Layout } from 'antd'
import 'assets/css/general.css'
import Login from 'components/auth/Login'
import Loading from 'components/utils/Loading'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import Dashboard from 'components//generic/Dashboard'
import Footer from 'components//generic/Footer'
import Header from 'components//generic/Header'
import Page404 from 'components//generic/Page404'
import Sidebar from 'components//generic/Sidebar'
import PersonRouter from 'components//person/Router'
import PostRouter from 'components//post/Router'

const { Content } = Layout

function App () {
  const isLoggedIn = useSelector(state => state.isLoggedIn)
  const userIsLoading = useSelector(state => state.userIsLoading)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUser())
  }, [])

  if (userIsLoading) {
    return <Loading size='large' />
  }

  return (
    <div className='App'>
      <Layout style={{ minHeight: '100vh' }}>
        {!isLoggedIn ? (
          <Login />
        ) : (
          <>
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
          </>
        )}
      </Layout>
    </div>
  )
}

export default App
