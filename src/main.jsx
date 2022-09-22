import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeContextProvider } from './context/ThemeContext'
import{BrowserRouter as Router,Routes,Route} from "react-router-dom";
import './index.css'
import App from './App'

import Layout from './Layout'
import Editor from './editor/sections/Editor';
import ToolEditor from './editor/context/ToolEditor';


import Ejecutar from './ejecutar/sections/Ejecutar';
import ToolEjecutar from './ejecutar/context/ToolEjecutar';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <ThemeContextProvider>
        <Routes>
          <Route exact path="/" element={<App/>}/>
          <Route exact path="/Editor" element={<Layout page={<Editor/>} tool={<ToolEditor/>} />}/>
          <Route exact path="/Ejecutar" element={<Layout page={<Ejecutar/>} tool={<ToolEjecutar/>} />}/>
        </Routes>
      </ThemeContextProvider>
    </Router>
  </React.StrictMode>
)

