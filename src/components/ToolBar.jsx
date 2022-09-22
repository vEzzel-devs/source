import React from "react";


export default function ToolBar(props) {
  return (
      <div className="flex flex-row h-[10%] justify-between bg-gray-400">
        {props.children}
        <div>
          boton luz
          ayuda
        </div>
      </div>
  );
}

