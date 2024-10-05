import React from "react";
import Sidebar from "./Layouts/Sidebar";
import { Outlet } from "react-router-dom";
import Topbar from "./Layouts/Topbar";

const Root = () => {
  return (
    <div className="flex h-screen bg-[rgb(236,222,228)] bg-[radial-gradient(circle,_rgba(236,222,228,1)_0%,_rgba(167,225,233,1)_24%,_rgba(245,254,249,1)_67%,_rgba(115,179,255,1)_100%)]">
      <Sidebar />
      <div className="flex flex-col w-full">
        <div className="h-[13%]">
        <Topbar />
        </div>
        <div className="h-[87%]">
        <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Root;
