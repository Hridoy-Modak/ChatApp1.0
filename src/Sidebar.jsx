import React from "react";
import { RiHome3Line } from "react-icons/ri";
import { IoSettings } from "react-icons/io5";
import { SiChatwoot } from "react-icons/si";
import { MdGroups2 } from "react-icons/md";
import { MdAddCall } from "react-icons/md";
import { IoSearch } from "react-icons/io5";

const Sidebar = () => {
  return (
    <div className="bg-[rgb(236,222,228)] bg-[radial-gradient(circle,_rgba(236,222,228,1)_0%,_rgba(167,225,233,1)_24%,_rgba(245,254,249,1)_67%,_rgba(115,179,255,1)_100%)]">
      <div className="flex flex-row-reverse">
        <div className="topbar w-full h-[100px] shadow-lg flex justify-between">
          <div className=" flex h-full items-center ml-9 relative">
            <IoSearch className="absolute opacity-40 font-bold ml-3 text-[20px]" />
            <input
              type="text"
              placeholder="Search Contact and Others"
              className="  text-[12px] w-[250px] py-2 pl-10 placeholder-opacity-50  rounded-2xl shadow-md"
            />
          </div>
          <div className="[clip-path:polygon(25%_0,_100%_0%,_100%_100%,_0%_100%)]  bg-[#5873FF] opacity-85 w-[35%]">
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
        <div className="sidebar bg-[#5873FF] h-screen w-[120px]">
          <div className="flex justify-center h-[15%] items-center">
            <img className="w-[55px]" src="./logo.png" alt="logo" />
          </div>
          <ul className=" flex flex-col items-center justify-around h-[85%]">
            <div className="flex flex-col items-center gap-10">
              <li className="text-white text-[40px] ">
                <RiHome3Line />
              </li>
              <li className="text-white text-[40px] ">
                <SiChatwoot />
              </li>
              <li className="text-white text-[40px] ">
                <MdGroups2 />
              </li>
              <li className="text-white text-[40px] ">
                <MdAddCall />
              </li>
            </div>
            <div>
              <IoSettings className="text-white text-[30px]" />
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
