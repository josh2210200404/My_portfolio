import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Resume from './components/Resume.jsx'
import './index.css'

const isResume = window.location.pathname.replace(/\/+$/, '') === '/resume'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {isResume ? <Resume /> : <App />}
    </React.StrictMode>,
)
