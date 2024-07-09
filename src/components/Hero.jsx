import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const handleScroll = () => {
      const text = document.querySelectorAll(".transiText");
      text.forEach((texts) => {
        const rect = texts.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          texts.classList.add("visible");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div>
      <div id="intro" className="p-5 text-center bg-image shadow-1-strong">
        <div className="mask flex justify-center items-center">
          <div className="flex justify-center items-center flex-col">
            <div>
              <h1 className="text-white font-semibold text-2xl sm:text-4xl md:text-5xl lg:text-6xl transiText">
                Your Trusted Advertising Partner Since 1938
              </h1>
            </div>
            <hr className="w-4/5 mt-5" />
            <div className="mt-3 mb-5">
              <h2 className="text-white text-base sm:text-xl md:text-2xl lg:text-3xl transiText">
                Innovative Solutions for All Your Advertising Needs
              </h2>
            </div>
            <div className="w-auto mt-4">
              <button
                className="text-white w-auto p-4 border-black border-4 text-xl rounded-lg transiText"
                id="ServicesBtn"
                onClick={() => {
                  navigate("/services");
                }}
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
