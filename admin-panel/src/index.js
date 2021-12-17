import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { ConfigProvider as AntProvider } from 'antd'
import { BrowserRouter as RouterProvider } from 'react-router-dom'
import 'antd/dist/antd.css'

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider>
      <AntProvider direction='rtl'>
        <App />
      </AntProvider>
    </RouterProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
