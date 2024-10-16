import React from "react";
import { RiGroup2Line } from "react-icons/ri";

const Groups = () => {
  return (
    <>
      <div className=" bg-white bg-opacity-55 w-[500px] h-full">
        <div className="h-[49px] flex border-b-[1.5px] border-primary_blue justify-between px-3 py-2">
          <h1 className="text-[20px] font-bold text-primary_blue">
            Group List
          </h1>
          <p className="text-[20px] font-bold text-primary_blue">50</p>
        </div>
        <div className="h-[84%] flex flex-col gap-1 p-1 overflow-auto _blue scrollbar-thin">
          <div className=" flex w-full justify-between px-3 bg-slate-700 bg-opacity-15 items-center rounded-xl">
            <div className="flex gap-3">
              <RiGroup2Line className="text-[50px]" />
              <div>
                <h2>Group 1</h2>
                <p>Total 50 mambers</p>
              </div>
            </div>
            <button className="bg-primary_blue text-white py-1 px-3 rounded-lg">
              Open
            </button>
          </div>
          <div className=" flex w-full justify-between px-3 bg-slate-700 bg-opacity-15 items-center rounded-xl">
            <div className="flex gap-3">
              <RiGroup2Line className="text-[50px]" />
              <div>
                <h2>Group 1</h2>
                <p>Total 50 mambers</p>
              </div>
            </div>
            <button className="bg-primary_blue text-white py-1 px-3 rounded-lg">
              Open
            </button>
          </div>
          <div className=" flex w-full justify-between px-3 bg-slate-700 bg-opacity-15 items-center rounded-xl">
            <div className="flex gap-3">
              <RiGroup2Line className="text-[50px]" />
              <div>
                <h2>Group 1</h2>
                <p>Total 50 mambers</p>
              </div>
            </div>
            <button className="bg-primary_blue text-white py-1 px-3 rounded-lg">
              Open
            </button>
          </div>
          <div className=" flex w-full justify-between px-3 bg-slate-700 bg-opacity-15 items-center rounded-xl">
            <div className="flex gap-3">
              <RiGroup2Line className="text-[50px]" />
              <div>
                <h2>Group 1</h2>
                <p>Total 50 mambers</p>
              </div>
            </div>
            <button className="bg-primary_blue text-white py-1 px-3 rounded-lg">
              Open
            </button>
          </div>
          <div className=" flex w-full justify-between px-3 bg-slate-700 bg-opacity-15 items-center rounded-xl">
            <div className="flex gap-3">
              <RiGroup2Line className="text-[50px]" />
              <div>
                <h2>Group 1</h2>
                <p>Total 50 mambers</p>
              </div>
            </div>
            <button className="bg-primary_blue text-white py-1 px-3 rounded-lg">
              Open
            </button>
          </div>
          <div className=" flex w-full justify-between px-3 bg-slate-700 bg-opacity-15 items-center rounded-xl">
            <div className="flex gap-3">
              <RiGroup2Line className="text-[50px]" />
              <div>
                <h2>Group 1</h2>
                <p>Total 50 mambers</p>
              </div>
            </div>
            <button className="bg-primary_blue text-white py-1 px-3 rounded-lg">
              Open
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Groups;
