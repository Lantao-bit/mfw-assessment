import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// find the HTML element in your index.html file 
// where the React application will be mounted
// StrictMode: is a wrapper without visible UI, 
//     but additional checks and warnings during development 
// App:  main, top-level React component
createRoot(document.getElementById('root')).render(
  <StrictMode>     
    <App />
  </StrictMode>,
)