import React, { useState } from 'react'
import Footer from './Footer'
import Header from './Header'
import Home from './Home'
import Contact from './Contact'
import About from './About'
import Posts from './Posts'
import Login from './Login'
import Page404 from './404'
import Post from './Post'
import Sidebar from './Sidebar'
import './style.css'
import ThemeContext, { themes } from './ThemeContext'
import useAuth from './useAuth'
import UserContext from './UserContext'
import {
  BrowserRouter as RouterProvider,
  Routes,
  Route
} from 'react-router-dom'

export default function App () {
  const [theme, setTheme] = useState(themes.light)

  const { user, isLoggedIn, isLoading, login, logout } = useAuth()

  return (
    <div>
      <RouterProvider>
        <UserContext.Provider
          value={{ user, isLoggedIn, login, logout, isLoading }}
        >
          <ThemeContext.Provider value={theme}>
            {theme === themes.light ? (
              <button onClick={() => setTheme(themes.dark)}>Dark</button>
            ) : (
              <button onClick={() => setTheme(themes.light)}>Light</button>
            )}

            <Header />

            <section style={{ display: 'flex' }}>
              <Sidebar />
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='about-us' element={<About />} />
                <Route path='login' element={<Login />} />
                <Route path='post' element={<Posts />} />
                <Route path='post/:id' element={<Post />} />
                <Route path='*' element={<Page404 />} />
              </Routes>
            </section>

            <Footer />
          </ThemeContext.Provider>
        </UserContext.Provider>
      </RouterProvider>
    </div>
  )
}
