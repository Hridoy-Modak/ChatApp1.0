import React from "react";
import Friendlist from "../Templates/Friendlist";
import Groups from "../Templates/Groups";

const Home = () => {
  return (
    <div className="flex h-[100%]">
      <div className="w-[25%] ml-4 mt-1">
        <Friendlist />
      </div>
      <div className="w-[77%] flex flex-wrap  ml-4 mt-1 justify-around">
        <div className="h-[47%]">
        <Groups />
        </div>
        <div className="h-[47%]">
        <Groups />
        </div>
        <div className="h-[47%]">
        <Groups />
        </div>
        <div className="h-[47%]">
        <Groups />
        </div>
      </div>
    </div>
  );
};

export default Home;
