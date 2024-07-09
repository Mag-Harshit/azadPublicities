import React from "react";

const ServicesMain = () => {
  return (
    <div className="servicesTop">
      <div>
        <div className="text-7xl font-extrabold text-center p-8">
          <h1>SERVICES</h1>
        </div>
        <div>
          <p className="mt-4 text-2xl text-center pb-10">
            Azad Publicities in Ludhiana offers a wide range of advertising
            services tailored to meet the needs of various clients. Here are
            some of the key services provided by Azad Publicities:
          </p>
        </div>
      </div>
      <div className="flex flex-row flex-wrap justify-center gap-10 pb-8">
        <div className="servicesCard border-3">
          <img
            src="/img/Cinema_Services.jpg"
            className="mx-auto w-full h-50 lg:ml-5 imgServices "
          />
          <div className="flex flex-col">
            <h2 className="text-2xl font-semibold mb-6 text-center lg:text-left">
              Cinema Advertising
            </h2>
            <p className=" text-sm md:text-lg text-center lg:text-left">
              Engage audiences with high-impact ads shown before movies in local
              cinemas. Perfect for promoting new products, businesses, and
              events.
            </p>
          </div>
        </div>
        <div className="servicesCard border-3">
          <img
            src="/img/Radio_Services.jpg"
            className="mx-auto w-full h-50 lg:ml-5 imgServices"
          />
          <div className="flex flex-col">
            <h2 className="text-2xl font-semibold mb-6 text-center lg:text-left">
              Radio Advertising
            </h2>
            <p className=" text-sm md:text-lg text-center lg:text-left">
              Reach a broad audience with compelling radio ads featuring
              engaging storytelling and catchy jingles. Ideal for building brand
              awareness.
            </p>
          </div>
        </div>
        <div className="servicesCard border-3">
          <img
            src="/img/Unipole_Services.jpg"
            className="mx-auto w-full h-50 lg:ml-5 imgServices"
          />
          <div className="flex flex-col">
            <h2 className="text-2xl font-semibold mb-6 text-center lg:text-left">
              Unipole Advertising
            </h2>
            <p className=" text-sm md:text-lg text-center lg:text-left">
              Large-scale ads on tall poles in high-traffic areas, ensuring
              maximum visibility. Great for promoting products and events.
            </p>
          </div>
        </div>
        <div className="servicesCard border-3">
          <img
            src="/img/Neon_Services.jpg"
            className="mx-auto w-full h-50 lg:ml-5 imgServices"
          />
          <div className="flex flex-col">
            <h2 className="text-2xl font-semibold mb-6 text-center lg:text-left">
              Neon Signs
            </h2>
            <p className=" text-sm md:text-lg text-center lg:text-left">
              Custom neon signs that enhance business visibility and branding,
              especially at night. Ideal for storefronts and entertainment
              venues.
            </p>
          </div>
        </div>
        <div className="servicesCard border-3">
          <img
            src="/img/Boards_Services.jpg"
            className="mx-auto w-full h-50 lg:ml-5 imgServices"
          />
          <div className="flex flex-col">
            <h2 className="text-2xl font-semibold mb-6 text-center lg:text-left">
              Boards and Banners
            </h2>
            <p className=" text-sm md:text-lg text-center lg:text-left">
              Versatile advertising tools for events, promotions, and business
              advertising. Durable and attractive for various settings.
            </p>
          </div>
        </div>
        <div className="servicesCard border-3">
          <img
            src="/img/Kiosks_Services.jpg"
            className="mx-auto w-full h-3/6 lg:ml-5"
          />
          <div className="flex flex-col">
            <h2 className="text-2xl font-semibold mb-6 text-center lg:text-left">
              Kiosks
            </h2>
            <p className=" text-sm md:text-lg text-center lg:text-left">
              Interactive kiosks for engaging customers at malls, trade shows,
              and public events. Perfect for product demos and information
              distribution.
            </p>
          </div>
        </div>
        <div className="servicesCard border-3">
          <img
            src="/img/Hoardings_Services.jpg"
            className="mx-auto w-full h-50 lg:ml-5 imgServices"
          />
          <div className="flex flex-col">
            <h2 className="text-2xl font-semibold mb-6 text-center lg:text-left">
              Hoardings
            </h2>
            <p className=" text-sm md:text-lg text-center lg:text-left">
              Large billboards in prime locations to maximize exposure. Designed
              to capture attention and reinforce brand presence.
            </p>
          </div>
        </div>
        <div className="servicesCard border-3">
          <img
            src="/img/Bus_Services.jpg"
            className="mx-auto w-full h-50 lg:ml-5 imgServices"
          />
          <div className="flex flex-col">
            <h2 className="text-2xl font-semibold mb-6 text-center lg:text-left">
              Bus Shelters
            </h2>
            <p className=" text-sm md:text-lg text-center lg:text-left">
              High-visibility ads at bus shelters, targeting daily commuters.
              Ideal for local businesses and public announcements.
            </p>
          </div>
        </div>
        <div className="servicesCard border-3">
          <img
            src="/img/Railway_Services.jpg"
            className="mx-auto w-full h-50 lg:ml-5 imgServices"
          />
          <div className="flex flex-col">
            <h2 className="text-2xl font-semibold mb-6 text-center lg:text-left">
              Railway Advertising
            </h2>
            <p className=" text-sm md:text-lg text-center lg:text-left">
              Ads in railway stations and on trains, reaching a diverse audience
              of travelers and commuters. Various formats available.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesMain;
