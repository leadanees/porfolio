import React from "react";

const Footer = () => {

  const handleOpenLinkedin = (e) => {
    e.preventDefault();
    window.open('https://www.linkedin.com/in/anees-khan-3759a9202/', '_blank');
  };

  const handleOpenGithub = (e) => {
    e.preventDefault();
    window.open('https://www.github.com/leadanees', '_blank');
  };
  

  return (
    <>
      <div>
        <div className="flex justify-between text-white items-center px-20 py-10">
          <div>
            <h1 className="text-2xl border-white border-2 box-border text-center px-6 py-4 mb-2 rounded-full">
              LeadLaugh
            </h1>
            <h5 className="font-bold">FULL STACK DEVELOPER</h5>
            <h5 className="font-bold">& SOFTWARE ENGINEER</h5>
          </div>
          <div className="flex text-lg space-x-20 font-medium uppercase ">
            <div>
              <ul>
                <li>
                  <a href="/home" className="hover:text-gray-400">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/work" className="hover:text-gray-400">
                    Work
                  </a>
                </li>
                <li>
                  <a href="/about" className="hover:text-gray-400">
                    About
                  </a>
                </li>
                <li>
                  <a href="/service" className="hover:text-gray-400">
                    Service
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li>
                  <a href="/contact" className="hover:text-gray-400">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="/privacypolicy" className="hover:text-gray-400">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/cookiespolicy" className="hover:text-gray-400">
                    Cookies Policy
                  </a>
                </li>
                <li>
                  <a href="/term&condition" className="hover:text-gray-400">
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li>
                  <a href='/linkedin' onClick={handleOpenLinkedin} className="hover:text-gray-400">
                    Linkedin
                  </a>
                </li>
                <li>
                  <a href="/github" onClick={handleOpenGithub} className="hover:text-gray-400">
                    Github
                  </a>
                </li>
                <li>
                  <a href="/email" className="hover:text-gray-400">
                    Email
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-white pt-20 pb-8 font-medium text-xl items-center text-center uppercase">
          <h1>Anees Khan 2024 | All rights reserved ©</h1>
        </div>
      </div>
    </>
  );
};

export default Footer;
