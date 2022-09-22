import React from "react";
import Sidebar from './components/Sidebar';

function Layout(props) {
  return (
    <div className="flex flex-nowrap ">
      <div className="">
        <Sidebar />
      </div>

      <div className="w-screen">
        {props.tool}
        {props.page}
      </div>
    </div>
  );
}

export default Layout;