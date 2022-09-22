import React from "react";


export default function ToolBar(props) {
  return (
      <div className={` bg-gray-400`}>
        {props.tool}
        <div className="right-1">
          ayuda
        </div>
      </div>
  );
}

