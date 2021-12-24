import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { ConfigProvider as AntProvider } from 'antd'
import { BrowserRouter as RouterProvider } from 'react-router-dom'
import { Provider as ReduxProvider } from 'react-redux'
import store from './redux/store'
import 'antd/dist/antd.css'

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <RouterProvider>
        <AntProvider direction='rtl'>
          <App />
        </AntProvider>
      </RouterProvider>
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
