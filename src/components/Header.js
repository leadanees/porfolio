import React from "react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-transparent text-white text-xl px-20 py-8 z-10">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl border-white border-2 box-border text-center px-3 py-2 rounded-3xl">
          LeadLaughAnees
        </h1>
        <nav>
          <ul className="flex space-x-16">
            <li>
              <a
                href="/work"
                className="border-2 border-transparent hover:border-gray-300 hover:text-gray-400  rounded-md px-2 py-1 transition-all duration-200 cursor-pointer"
              >
                Work
              </a>
            </li>
            <li>
              <a
                href="/home"
                className="border-2 border-transparent hover:border-gray-300 hover:text-gray-400 rounded-md px-2 py-1 transition-all duration-200 cursor-pointer"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="border-2 border-transparent hover:border-gray-300 hover:text-gray-400 rounded-md px-2 py-1 transition-all duration-200 cursor-pointer"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="border-2 border-transparent hover:border-gray-300 hover:text-gray-400 rounded-md px-2 py-1 transition-all duration-200 cursor-pointer"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
