import React from "react";
import Friendlist from "../Templates/Friendlist";

const Message = () => {
  return (
    <div className="flex h-[100%] w-[100%]">
      <div className="w-[23%]">
        <Friendlist />
      </div>
      <div className=" bg-black h-[100%] w-[77%]"></div>
    </div>
  );
};

export default Message;
