import React from "react";
import Friendlist from "../Templates/Friendlist";
import Groups from "../Templates/Groups";

const Home = () => {
  return (
    <div className="flex h-[100%]">
      <div className="w-[23%]">
      <Friendlist />
      </div>
        <div className="w-[77%]">
      <Groups />
        </div>
    </div>
  );
};

export default Home;
