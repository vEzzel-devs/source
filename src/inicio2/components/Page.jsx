import React from "react";

export function Page(props) {
  return (
      <div className={`h-[90%] pt-[24px] bg-gray-500 relative`}>
        {props.children}
      </div>
  );
}

export default Page;