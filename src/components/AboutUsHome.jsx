import React from "react";

const AboutUsHome = () => {
  return (
    <section className="mt-10">
      <div className="flex justify-center mb-5">
        <h2 className="text-5xl font-semibold">ABOUT US</h2>
      </div>
      <div className="m-auto font-body rounded-3xl AbHome w-11/12 p-4">
        <h3 className="text-2xl mt-3 text-center font-medium mb-4">
          Your Trusted Advertising Partner Since 1938
        </h3>
        <div className="flex flex-col justify-center items-center gap-4">
          <div className="max-w-xs  sm:max-w-sm  md:max-w-md lg:max-w-xl">
            <img src="/img/AboutUsHome.avif" height={"100%"} alt="" />
          </div>
          <div className="w-11/12 ">
            <p className="text-center font-body font-medium text-xl sm:text-2xl">
              Azad Publicities has been a pioneer in the outdoor advertising
              industry for over eight decades. Established in 1938, we have
              consistently delivered innovative and impactful advertising
              solutions that connect brands with their audiences. Our expertise
              spans various forms of advertising including neon signs,
              hoardings, banners, kiosks, and more. We are dedicated to
              transforming ordinary spaces into powerful marketing platforms,
              ensuring that every brand we work with achieves its full
              potential.
            </p>

            <ul className="font-body list-disc list-inside font-medium text-xl sm:text-2xl mt-6">
              <li>Over 80 years of experience in the advertising industry</li>
              <li>Specializing in outdoor advertising solutions</li>
              <li>Trusted by numerous leading brands</li>
              <li>
                Committed to innovation, reliability, and customer satisfaction
              </li>
            </ul>
            <div className="text-center">
              <button
                className="text-black w-auto p-4 border-black border-4 text-xl rounded-lg mt-8"
                id="AboutUsBtn"
              >
                Learn More About Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsHome;
