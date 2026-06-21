import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import Counter from './pages/Counter.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  // <App />
    <Counter message="hello" />
  // </StrictMode>,
)
