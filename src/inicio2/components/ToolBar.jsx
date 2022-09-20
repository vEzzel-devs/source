import React from "react";


function ToolBar(props) {
  return (
    <div className="flex-row">
      <div className={`w-screen h-[10%] p-[10px] bg-gray-400 relative`}>
        {props.tool}
      </div>
      <div className={`w-screen h-screen p-[10px] bg-gray-300 relative`}>
        {props.page}
      </div>
    </div>
  );
}

export default ToolBar;
