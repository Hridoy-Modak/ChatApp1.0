import React from "react";
import { RiHome3Line } from "react-icons/ri";
import { IoSettings } from "react-icons/io5";
import { SiChatwoot } from "react-icons/si";
import { MdGroups2 } from "react-icons/md";
import { MdAddCall } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import Message from "../Pages/Message";

const Sidebar = () => {
  let navigate = useNavigate();
  let handlehome = () => {
    navigate("/");
  };
  let handlegroup = () => {
    navigate("/groups");
  };

  return (
    <div>
      <div className="flex flex-row-reverse">
        <div className="sidebar bg-[#5873FF] h-screen w-[120px]">
          <div className="flex justify-center h-[15%] items-center">
            <img className="w-[55px]" src="./logo.png" alt="logo" />
          </div>
          <ul className=" flex flex-col items-center justify-around h-[85%]">
            <div className="flex flex-col items-center gap-10">
              <li className="text-white text-[40px] cursor-pointer">
                <RiHome3Line onClick={handlehome} />
              </li>
              <li className="text-white text-[40px] cursor-pointer">
                <Link to="/message">
                  <SiChatwoot />
                </Link>
                {/* <Link to={Message}><SiChatwoot /><Link/> */}
              </li>
              <li className="text-white text-[40px] cursor-pointer">
                <MdGroups2 onClick={handlegroup} />
              </li>
              <li className="text-white text-[40px] cursor-pointer">
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
