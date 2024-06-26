import React from "react";

const Hero = () => {
  return (
    <div>
      <div id="intro" className="p-5 text-center bg-image shadow-1-strong">
        <div className="mask flex justify-center items-center">
          <div className="flex justify-center items-center flex-col">
            <div>
              <h1 className="text-white text-2xl sm:text-4xl md:text-5xl lg:text-6xl">
                Your Trusted Advertising Partner Since 1938
              </h1>
            </div>
            <hr className="w-4/5 mt-5" />
            <div className="mt-3 mb-5">
              <h2 className="text-white text-base sm:text-xl md:text-2xl lg:text-3xl">
                Innovative Solutions for All Your Advertising Needs
              </h2>
            </div>
            <div className="w-auto mt-4">
              <button
                className="text-white w-auto p-4 border-black border-4 text-xl rounded-lg"
                id="ServicesBtn"
              >
                Discover Our Services
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
