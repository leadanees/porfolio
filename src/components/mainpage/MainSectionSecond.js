import React from "react";
import AchivementSection from "./AchivementSection";
import ResumeDownload from "./ResumeDownload";

const MainSectionSecond = () => {
  return (
    <>
      <div className="bg-black">
        {/*  */}
        <div className="flex flex-col py-40 justify-center items-center text-center">
          <div className="w-3/5 text-white">
            <h1 className="text-3xl">
              I have been working for the past several years as a full-stack
              developer, focusing on technologies like ReactJS, Material-UI for
              UI, ASP.NET Core for API development, and SQL Server for database
              management. Along the way, I’ve been writing and refactoring code
              while integrating RESTful APIs using a variety of stacks. With
              experience in Postman for API testing and GitHub for version
              control, I can help guide teams and developers with best
              practices. 
              {/* I have been working for the past 10 years with
              Javascript. I’ve been writing/refactoring code and connecting
              restful apis using Angular, React and Vuejs for a couple of years
              but I also worked with different stacks in the past. I can
              help/guide your developers with best practices as well. */}
            </h1>
          </div>
          <div className="flex justify-between pt-14 space-x-8">
            <button className="text-2xl bg-white px-12 py-3 rounded-full">
              Know more
            </button>
            <button className="text-2xl text-white border-2 border-white px-12 py-3 rounded-full">
              Conatct
            </button>
          </div>
        </div>

        {/*  */}
        <div className="relative inset-0 flex justify-between">
          <div className="h-screen w-screen z-30 flex flex-col justify-center items-center text-white space-y-1">
            <img
              className="absolute top-0 right-12 h-3/4 w-1/3 -z-20 mt-24 opacity-35"
              src="https://agustinburgos.com/images/abstract-p-800.jpg"
              alt="Background"
            />
            <div className="flex space-x-2 items-baseline pr-96">
              <h2 className="text-5xl font-customCursive">Where</h2>
              <h1 className="text-9xl uppercase font-sans font-normal">
                expertise
              </h1>
            </div>
            <div className="flex space-x-2 items-baseline pl-20">
              <h1 className="text-9xl uppercase font-sans font-normal">
                meets
              </h1>
              {/* <h5 className="text-5xl">&</h5> */}
            </div>
            <div className="pl-72">
              <h1 className="font-sans font-normal text-9xl uppercase pl-96">
                innovation
              </h1>
            </div>
          </div>
        </div>
        <ResumeDownload />
        {/*  */}
        <AchivementSection />
      </div>
    </>
  );
};

export default MainSectionSecond;
