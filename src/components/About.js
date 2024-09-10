import React from "react";

const About = () => {
  return (
    <>
      <div>
        {" "}
        <div className="relative inset-0 flex justify-between bg-black">
          <div className="h-screen w-full z-30 flex flex-col pt-52  pl-52 text-white space-y-4">
            <div className="z-20 flex space-x-2 items-baseline">
              <h2 className="text-6xl font-customCursive">hi there, I'm</h2>
            </div>
            <div className="z-20 flex space-x-2 items-baseline">
              <h1 className="text-9xl font-customSans font-normal">
                Anees Khan
              </h1>
            </div>
          </div>

          <div className="absolute top-36 right-24 h-4/6 w-3/12 z-10">
            <img
              className="h-full w-full object-cover opacity-60 brightness-50"
              src="https://avatars.githubusercontent.com/u/117594913?v=4"
              alt="Background"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black to-transparent opacity-45"></div>
          </div>
        </div>
        <div className="flex flex-col py-24 justify-center items-center text-center">
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
          {/* <div className="flex justify-between pt-14 space-x-8">
            <button className="text-2xl bg-white px-12 py-3 rounded-full">
              Know more
            </button>
            <button className="text-2xl text-white border-2 border-white px-12 py-3 rounded-full">
              Conatct
            </button>
          </div> */}
        </div>
        <div>
          <div className="flex justify-center items-center">
            <img
              className="top-0 pt-0 h-3/4 w-3/4"
              src="https://agustinburgos.com/images/laptop-p-1080.jpg"
              alt="Background"
            />
          </div>
        </div>

        <div className="text-white">
          <div className="order-1">
            <div className="flex justify-start items-center text-3xl">
              <h1 className="pl-16 py-6">01</h1>
              <h2 className="px-4 py-6">Software skills</h2>
            </div>
            <div className="flex justify-between px-16 pb-28 text-xl">
              <ul>
                <li>Javascript</li>
                <li>ReactJS</li>
                <li>C#</li>
                <li>ASP.NET Core</li>
                <li>Flutter</li>
              </ul>
              <ul>
                <li>HTML5</li>
                <li>CSS</li>
                <li>Material-UI</li>
                <li>Tailwind</li>
                <li>BootStrap</li>
              </ul>
              <ul>
                <li>Microsoft SQL Server</li>
                <li>Nodejs</li>
                <li>Java</li>
                <li>Python</li>
                <li>Django</li>
              </ul>
              <ul>
                <li>GitHub</li>
                <li>Postman</li>
              </ul>
            </div>
          </div>
          <hr className="pt-10" />
          <div className="order-2">
            <div className="flex justify-start items-center text-3xl">
              <h1 className="pl-16 py-6">02</h1>
              <h2 className="px-4 py-6">Work experience</h2>
            </div>
            <div className="flex justify-between  px-16 pb-28 text-xl">
              <ul>
                <li>Sentient System pvt. ltd.</li>
              </ul>
              <ul>
                <li>Software developer</li>
              </ul>
              <ul>
                <li>2023</li>
              </ul>
              <ul>
                <li>2024</li>
              </ul>
            </div>
          </div>
          {/* <hr className="pt-10"/>
          <div className="order-3">
            <div className="flex justify-start items-center text-3xl">
              <h1 className="pl-16 py-10">03</h1>
              <h2 className="px-4 py-10">Licenses & Certifications</h2>
            </div>
            <div className="flex justify-between px-16 text-xl">
              <ul>
                <li>Sentient System pvt. ltd.</li>
              </ul>
              <ul>
                <li>Software developer</li>
              </ul>
              <ul>
                <li>2023</li>
              </ul>
              <ul>
                <li>2024</li>
              </ul>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default About;
