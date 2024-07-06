import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Services = () => {
  useEffect(() => {
    const handleScroll = () => {
      const cards = document.querySelectorAll(".card");
      const cards2 = document.querySelectorAll(".card2");
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          card.classList.add("visible");
        }
      });
      cards2.forEach((card) => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          card.classList.add("visible");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="mt-12 rounded-lg p-3">
      <div className="flex flex-col justify-center items-center">
        <div className="uppercase text-7xl font-extrabold">Services</div>
        <div className="flex flex-col gap-4  sm:grid sm:grid-cols-2 sm:grid-rows-3 sm:gap-5 lg:grid-cols-3 lg:grid-rows-2 lg:gap-6 mt-4">
          <div
            className="card2 h-card3 flex mx-1 flex-row max-w-xl xsm:h-card sm:h-auto sm:block   sm:max-w-96 text-black rounded-xl"
            style={{ backgroundColor: "#a7a7a7" }}
          >
            <img
              className="h-card3 xsm:h-card w-6/12 border-black border-b-2 sm:w-full sm:mx-auto sm:h-4/6"
              src="/img/Boards-Banners.jpg"
              alt="neon sign"
            />
            <div className="flex flex-col">
              <h1 className="text-2xl text-center mb-3 mt-2">
                Boards & Banners
              </h1>
              <p className="text-center">
                High-quality boards and banners that effectively communicate
                your brand message at various advertising locations.
              </p>
            </div>
          </div>
          <div className="card">
            <img
              className="cardImg "
              src="/img/Neon-Sign.jpg"
              alt="neon sign"
            />
            <div className="flex flex-col">
              <h1 className="text-2xl text-center mb-3 mt-2">Neon Signs</h1>
              <p className="text-center">
                Bright, eye-catching neon signs designed to enhance your
                business's visibility both day and night.
              </p>
            </div>
          </div>
          <div className="card">
            <img className="cardImg " src="/img/Kiosks.jpg" alt="neon sign" />
            <div className="flex flex-col">
              <h1 className="text-2xl text-center mb-3 mt-2">Kiosks</h1>
              <p className="text-center">
                Interactive advertising kiosks in high-traffic areas to engage
                customers and provide product or service information.
              </p>
            </div>
          </div>
          <div className="card">
            <img
              className="cardImg "
              src="/img/Hoardings.jpg"
              alt="neon sign"
            />
            <div className="flex flex-col">
              <h1 className="text-2xl text-center mb-3 mt-2">Hoardings</h1>
              <p className="text-center">
                Large-scale billboards positioned in prominent locations to
                maximize exposure and attract the attention of passersby.
              </p>
            </div>
          </div>
          <div className="card">
            <img
              className="cardImg"
              src="/img/Bus-Shelter-Img.jpg"
              alt="neon sign"
            />
            <div className="flex flex-col">
              <h1 className="text-2xl text-center mb-3 mt-2">
                Bus Shelter Advertising
              </h1>
              <p className="text-center">
                Advertisements placed on bus shelters, reaching commuters and
                enhancing brand visibility in urban areas.
              </p>
            </div>
          </div>
          <div
            className="card2 h-card3 flex mx-1 flex-row max-w-xl xsm:h-card sm:h-auto sm:block   sm:max-w-96 text-black rounded-xl"
            style={{ backgroundColor: "#a7a7a7" }}
          >
            <img
              className="h-card3 xsm:h-card w-6/12 border-black border-b-2 sm:w-full sm:mx-auto sm:h-4/6"
              src="/img/Road-High-Img.jpg"
              alt="neon sign"
            />
            <div className="flex flex-col">
              <h1 className="text-2xl text-center mb-3 mt-2">
                Highway Advertising
              </h1>
              <p className="text-center">
                Large advertisements on roadways and highways, capturing the
                attention of motorists and increasing brand awareness.
              </p>
            </div>
          </div>
        </div>
        <div className="text-center">
          <button
            className="text-black w-auto p-4 border-black border-4 text-xl rounded-lg mt-8"
            id="ServicesBtn2"
          >
            <a href="/services"> More Services</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
