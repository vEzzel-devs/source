import React from 'react'
import ReactDOM from 'react-dom/client'
import { SpreadSheetContextProvider } from './context/SpreadSheetContext';
import { UserDataContextProvider } from './context/UserDataContext';
import { MuiThemeContextProvider } from './context/MuiThemeContext'
import { ThemeContextProvider } from './context/ThemeContext'
import { RouteContextProvider } from './context/RouteContext';
import { SystemContextProvider } from './context/SystemContext';
import{ BrowserRouter } from "react-router-dom";
import './index.css'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <SystemContextProvider>
        <RouteContextProvider>
          <MuiThemeContextProvider>
            <ThemeContextProvider>
              <UserDataContextProvider>
                <SpreadSheetContextProvider>
                  <App/>
                </SpreadSheetContextProvider>
              </UserDataContextProvider>
            </ThemeContextProvider>
          </MuiThemeContextProvider>
        </RouteContextProvider>
      </SystemContextProvider>
    </BrowserRouter>
  </React.StrictMode>
)

