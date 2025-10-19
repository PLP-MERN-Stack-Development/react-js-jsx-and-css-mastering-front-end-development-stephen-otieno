import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './App.css'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/react-js-jsx-and-css-mastering-front-end-development-stephen-otieno">
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
