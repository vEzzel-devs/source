import React from "react";
import Sidebar from '../components/Sidebar';
import ToolBar from './components/ToolBar';

import Editor from './sections/Editor';
import ToolEditor from './context/ToolEditor';


function Layout2(props) {
  return (
    <div className="flex">
      <Sidebar/>
      <ToolBar page={props.page} tool={props.tool}/>
      
    </div>
  );
}

export default Layout2;