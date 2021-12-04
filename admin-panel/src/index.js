import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { ConfigProvider as AntProvider } from 'antd'
import 'antd/dist/antd.css'

ReactDOM.render(
  <React.StrictMode>
    <AntProvider direction='rtl'>
      <App />
    </AntProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
