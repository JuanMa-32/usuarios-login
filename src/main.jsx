import React from 'react'
import ReactDOM from 'react-dom/client'
import UsersApp from './UsersApp'
import './index.css'
import { LoginPage } from './auth/pages/LoginPage'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UsersApp />
  </React.StrictMode>,
)
