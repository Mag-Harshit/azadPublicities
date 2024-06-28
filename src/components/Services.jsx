import React from "react";

const Services = () => {
  return (
    <div className="mt-10">
      <div className="flex flex-col justify-center items-center">
        <div className="uppercase text-5xl">Services</div>
        <div className="grid grid-cols-2 grid-rows-3 gap-5 lg:grid-cols-3 lg:grid-rows-2 lg:gap-6 mt-4">
          <div className="card">
            <img
              className="h-3/6 border-black border-b-2 w-full mx-auto sm:h-4/6 "
              src="/img/Boards-Banners.jpg"
              alt="neon sign"
            />
            <h1 className="text-2xl text-center mb-3 mt-2">Boards & Banners</h1>
            <p className="text-center">
              High-quality boards and banners that effectively communicate your
              brand message at events, promotions, and various advertising
              locations.
            </p>
          </div>
          <div className="card">
            <img
              className="h-3/6 border-black border-b-2 w-full mx-auto sm:h-4/6 "
              src="/img/Neon-Sign.jpg"
              alt="neon sign"
            />
            <h1 className="text-2xl text-center mb-3 mt-2">Neon Signs</h1>
            <p className="text-center">
              Bright, eye-catching neon signs designed to enhance your
              business's visibility both day and night. Perfect for storefronts
              and indoor displays.
            </p>
          </div>
          <div className="card">
            <img
              className="h-3/6 w-full mx-auto border-black border-b-2 sm:h-4/6 "
              src="/img/Kiosks.jpg"
              alt="neon sign"
            />
            <h1 className="text-2xl text-center mb-3 mt-2">Kiosks</h1>
            <p className="text-center">
              Interactive advertising kiosks placed in strategic, high-traffic
              areas to engage customers and provide information about your
              products or services.
            </p>
          </div>
          <div className="card">
            <img
              className="h-3/6 w-full mx-auto border-black border-b-2 sm:h-4/6 "
              src="/img/Hoardings.jpg"
              alt="neon sign"
            />
            <h1 className="text-2xl text-center mb-3 mt-2">Hoardings</h1>
            <p className="text-center">
              Large-scale billboards positioned in prominent locations to
              maximize exposure and attract the attention of passersby.
            </p>
          </div>
          <div className="card">
            <img
              className="h-3/6 w-full mx-auto border-black border-b-2 sm:h-4/6 "
              src="/img/Bus-Shelter-Img.jpg"
              alt="neon sign"
            />
            <h1 className="text-2xl text-center mb-3 mt-2">
              Bus Shelter Advertising
            </h1>
            <p className="text-center">
              Advertisements placed on bus shelters, reaching commuters and
              enhancing brand visibility in urban areas.
            </p>
          </div>
          <div className="card">
            <img
              className="h-3/6 w-full mx-auto border-black border-b-2 sm:h-4/6 "
              src="/img/Road-High-Img.jpg"
              alt="neon sign"
            />
            <h1 className="text-2xl text-center mb-3 mt-2">
              Roadway & Highway Advertising
            </h1>
            <p className="text-center">
              Large advertisements on roadways and highways, capturing the
              attention of motorists and increasing brand awareness.
            </p>
          </div>
        </div>
        <div className="text-center">
          <button
            className="text-black w-auto p-4 border-black border-4 text-xl rounded-lg mt-8"
            id="ServicesBtn"
          >
            Learn More About Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
