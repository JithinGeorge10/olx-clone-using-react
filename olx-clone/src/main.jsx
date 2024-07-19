import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import './Firebase/config.jsx'
import AuthContext from './Components/authContext.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <AuthContext >
        <App />
      </AuthContext>
    </Router>
  </React.StrictMode>,
)
