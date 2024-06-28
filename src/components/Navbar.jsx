import React, { useState } from "react";

const Navbar = () => {
  const [itemVisible, setItemVisible] = useState(false);
  function handleVisibility() {
    setItemVisible(!itemVisible);
    console.log(itemVisible);
  }

  return (
    <nav className="border-black border-b-1 shadow">
      <div className="flex flex-col justify-center items-center lg:justify-between lg:items-center lg:flex-row">
        <div className="flex flex-col sm:flex-row justify-between items-center w-full lg:w-auto">
          <div>
            <a href="/">
              <img
                id="logo"
                src="/img/Azad-Logo.png"
                alt="Azad Logo"
                width={"500px"}
              />
            </a>
          </div>

          <div className="text-black flex items-center flex-col lg:flex-row">
            <button
              className="cursor-pointer box-content lg:hidden w-12 m-4 sm:m-0"
              onClick={handleVisibility}
              id="menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-12"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </div>
        <ul
          className={`text-black ${
            itemVisible ? "flex" : "hidden"
          } flex-col items-center lg:flex lg:flex-row`}
          id="items"
        >
          <li>
            {" "}
            <button className="NavItems">Home</button>
          </li>
          <li>
            {" "}
            <button className="NavItems">About Us</button>
          </li>
          <li>
            {" "}
            <button className="NavItems">Services</button>
          </li>
          <li>
            {" "}
            <button className="NavItems">Portfolio</button>
          </li>
          <li>
            {" "}
            <button className="NavItems">Testimonials</button>
          </li>
          <li>
            {" "}
            <button className="NavItems">Contact Us</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
