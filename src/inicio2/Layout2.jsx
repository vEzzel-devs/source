import React from "react";
import Sidebar from '../components/Sidebar';
import ToolBar from './components/ToolBar';
import Page from './components/Page';

function Layout2(props) {
  return (
    <div className="grid grid-rows-3 grid-flow-col content-between ">
      <div className="row-span-3">
        <Sidebar />
      </div>
      <div className="col-span-2 h-[50px]">
        <ToolBar tool={props.tool}/>
      </div>
      <div className="row-span-2 col-span-2">
        <Page page={props.page} />
      </div>
    </div>
  );
}

export default Layout2;