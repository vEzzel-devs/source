import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeContextProvider } from './context/ThemeContext'
import{BrowserRouter as Router,Routes,Route} from "react-router-dom";
import './index.css'
import App from './App'
import Layout2 from './inicio2/Layout2'


import Editor from './inicio2/sections/Editor';
import ToolEditor from './inicio2/context/ToolEditor';
import Ejecutar from './inicio2/sections/Ejecutar';
import ToolEjecutar from './inicio2/context/ToolEjecutar';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <ThemeContextProvider>
        <Routes>
          <Route exact path="/" element={<App/>}/>
          <Route exact path="/Editor" element={<Layout2 page={<Editor/>} tool={<ToolEditor/>} />}/>
          <Route exact path="/Ejecutar" element={<Layout2 page={<Ejecutar/>} tool={<ToolEjecutar/>} />}/>
        </Routes>
      </ThemeContextProvider>
    </Router>
  </React.StrictMode>
)

