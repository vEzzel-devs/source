import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeContextProvider } from './context/ThemeContext'
import{ BrowserRouter, Routes } from "react-router-dom";
import './index.css'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeContextProvider>
        <Routes>
          <App/>
        </Routes>
      </ThemeContextProvider>
    </BrowserRouter>
  </React.StrictMode>
)

