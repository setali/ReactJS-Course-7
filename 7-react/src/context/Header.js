import React, { Component } from 'react'
import ThemeContext from './ThemeContext'
import UserContext from './UserContext'
import { Link } from 'react-router-dom'

export default class Header extends Component {
  render () {
    return (
      <UserContext.Consumer>
        {({ user, isLoggedIn, logout, isLoading }) => (
          <ThemeContext.Consumer>
            {theme => (
              <div
                className='box'
                style={{
                  ...theme,
                  display: 'flex',
                  justifyContent: 'space-between'
                }}
              >
                <h2>Header</h2>
                {!isLoading && (
                  <div>
                    {isLoggedIn && <span>{user.name}</span>}
                    {isLoggedIn ? (
                      <span className='logout' onClick={logout}>
                        Logout
                      </span>
                    ) : (
                      <Link to={'/login'}>Login</Link>
                    )}
                  </div>
                )}
              </div>
            )}
          </ThemeContext.Consumer>
        )}
      </UserContext.Consumer>
    )
  }
}
