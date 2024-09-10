import React from "react";

const MainSectionFirst = () => {
  return (
    <>
      <div>
        {/* First Section */}
        <div className="h-screen w-screen relative">
          <img
            className="w-full h-screen object-cover absolute top-0 left-0"
            src="https://st3.depositphotos.com/2297123/35437/i/450/depositphotos_354373262-stock-photo-smoke-laser-neon-studio-led.jpg"
            alt="logo"
          />
        </div>

        {/* <div className="h-screen w-screen relative overflow-hidden">
          <video
            autoPlay
            loop
            muted
            className="w-full h-full object-cover absolute top-0 left-0"
          >
            <source
              src="https://cdn.pixabay.com/video/2020/08/21/47802-451812879_large.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div> */}
        {/* Text Overlay for the First Section */}
        <div className="absolute inset-0 flex flex-col justify-center pt-20 items-center text-center text-white space-y-1">
          <div className="flex space-x-2 items-baseline pr-96">
            <h2 className="text-5xl font-customCursive">I'm a</h2>
            <h1 className="text-9xl uppercase font-sans font-normal">
              Full-stack
            </h1>
          </div>
          <div className="flex space-x-2 items-baseline pl-96">
            <h1 className="text-9xl uppercase font-sans font-normal">
              Developer
            </h1>
            <h5 className="text-5xl">&</h5>
          </div>
          <div className="pr-72">
            <h1 className="font-sans font-normal text-9xl uppercase">
              Software
            </h1>
          </div>
          <div className="pl-72">
            <h1 className="font-sans font-normal text-9xl uppercase">
              Engineer
            </h1>
          </div>
        </div>

        {/* Second Section */}
      </div>
    </>
  );
};

export default MainSectionFirst;
