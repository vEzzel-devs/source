import React from 'react'
import ReactDOM from 'react-dom/client'
import { MuiThemeContextProvider } from './context/MuiThemeContext'
import { ThemeContextProvider } from './context/ThemeContext'
import { RouteContextProvider } from './context/RouteContext';
import{ BrowserRouter } from "react-router-dom";
import './index.css'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <RouteContextProvider>
        <MuiThemeContextProvider>
          <ThemeContextProvider>
            <App/>
          </ThemeContextProvider>
        </MuiThemeContextProvider>
      </RouteContextProvider>
    </BrowserRouter>
  </React.StrictMode>
)

