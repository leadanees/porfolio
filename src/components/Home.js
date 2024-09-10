import React from "react";
import MainSectionFirst from "./mainpage/MainSectionFirst";
import MainSectionSecond from "./mainpage/MainSectionSecond";

const Home = () => {
  return (
    <>
      <MainSectionFirst/>
      {/* <div className="absolute top-1/2 right-10 translate-y-[-50%] bg-white px-4 py-2 rounded-md shadow-md">
        <p className="text-black font-bold">Nominee</p>
      </div> */}
      <MainSectionSecond/>
      {/* <MainSectionThird/> */}
    </>
  );
};

export default Home;
