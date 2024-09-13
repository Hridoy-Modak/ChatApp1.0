import React from "react";
import { IoSearch } from "react-icons/io5";

const Topbar = () => {
  return (
    <div className="h-[10%]">
      <div className="topbar w-full h-full shadow-lg flex justify-between items-center">
        <div className=" flex h-full items-center ml-9 relative">
          <IoSearch className="absolute opacity-40 font-bold ml-3 text-[20px]" />
          <input
            type="text"
            placeholder="Search Contact and Others"
            className="  text-[12px] w-[250px] py-2 pl-10 placeholder-opacity-50  rounded-2xl shadow-md"
          />
        </div>
        <div className="[clip-path:polygon(25%_0,_100%_0%,_100%_100%,_0%_100%)] h-full bg-[#5873FF] opacity-85 w-[35%]">
          <div className="h-full w-full gap-3 pl-10 flex items-center justify-end pr-7">
            <div className="h-full flex justify-center  flex-col">
              <h1 className="text-white">Hridoy Modak</h1>
              <div className="w-full flex items-center gap-1">
                <div className="bg-green-600 w-[10px] h-[10px] rounded-full "></div>
                <p className="text-white font-extralight text-[12px]">Online</p>
              </div>
            </div>
            <div className="max-w-[60px] rounded-full border ">
              <img className="rounded-full" src="./Profile.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
