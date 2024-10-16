import React from "react";
import Friendlist from "../Templates/Friendlist";
import { FcCallback, FcVideoCall } from "react-icons/fc";

const Message = () => {
  return (
    <div className="flex h-[100%] w-[100%] justify-center bg-white bg-opacity-50">
      <div className="w-[25%] h-[100%]">
        <Friendlist />
      </div>
      <div className=" h-[100%] w-[75%] ">
        <div className="px-2 pt-2 flex items-center justify-between">
          <div className="flex items-center">
            <img className="w-[60px]" src="./logo.png" alt="" />
            <div className="ml-5">
              <h2>Jon Weak</h2>
              <p>Online</p>
            </div>
          </div>
          <div className="flex gap-8 mr-4 items-center">
            <FcCallback className="text-[38px]" />
            <FcVideoCall className="text-[42px]"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
