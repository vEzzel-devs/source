import React from "react";

export function Page(props) {
  return (
    <div className="h-[100%]">
      <div className={`w-screen h-[100%] p-[10px] bg-gray-300 relative`}>
        {props.page}
      </div>
    </div>
  );
}

export default Page;