import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const AboutUsHome = () => {
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
    <section className="py-10 bgImageAbout">
      <div className="m-auto font-body rounded-3xl AbHome w-11/12 p-4">
        <div className="flex justify-center mr-auto mb-5">
          <h2 className="text-7xl font-extrabold">ABOUT US</h2>
        </div>
        <div className="flex flex-col lg:flex-row-reverse justify-center items-center gap-4">
          <div className="max-w-xs transiText sm:max-w-sm  md:max-w-md lg:max-w-xl">
            <img src="/img/AboutUsHome.avif" height={"100%"} alt="" />
          </div>
          <div className="w-11/12 ">
            <h3 className="text-2xl mt-3 text-center font-medium mb-4 transiText">
              Your Trusted Advertising Partner Since 1938
            </h3>
            <p className=" text-left sm:text-left font-medium text-xl sm:text-2xl homeFont transiText">
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
            <div className="text-center">
              <button
                className="text-white w-auto p-4 border-black border-4 text-xl rounded-lg mt-8 transiText"
                id="AboutUsBtn"
                onClick={() => [navigate("/aboutUs")]}
              >
                <a href="/aboutUs">Learn More About Us</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsHome;
