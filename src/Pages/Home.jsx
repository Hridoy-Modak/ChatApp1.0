import React from "react";
import Friendlist from "../Templates/Friendlist";
import Groups from "../Templates/Groups";

const Home = () => {
  return (
    <div className="flex h-[88%]">
      <Friendlist />
      <Groups />
    </div>
  );
};

export default Home;
