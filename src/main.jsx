import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeContextProvider } from './context/ThemeContext'
import { RouteContextProvider } from './context/RouteContext';
import{ BrowserRouter } from "react-router-dom";
import './index.css'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <RouteContextProvider>
        <ThemeContextProvider>
          <App/>
        </ThemeContextProvider>
      </RouteContextProvider>
    </BrowserRouter>
  </React.StrictMode>
)

