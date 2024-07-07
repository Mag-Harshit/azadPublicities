import React, { useEffect } from "react";

const AboutUs = () => {
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
      <div className="aboutImageMain text-white ">
        <div className="text-7xl font-extrabold text-center p-5 transiText">
          <h1>ABOUT US</h1>
        </div>
        <div className="mt-5 transiText">
          <h2 className="text-5xl font-semibold text-center">
            Company History
          </h2>
          <p className="mt-4 ml-2 text-2xl px-1 pb-8">
            Azad Publicities, established in Ludhiana, has been a prominent
            player in the advertising industry for several decades. Founded by
            the visionary Mr. Naresh Nanchahal, the company has grown from a
            small advertising firm into a leading agency known for its
            innovative and impactful advertising solutions. Over the years, Azad
            Publicities has consistently delivered exceptional results for its
            clients, adapting to the changing landscape of advertising and
            embracing new technologies and mediums. <br />
            <br />
            Sadly, Mr. Naresh Nanchahal passed away, leaving behind a legacy of
            excellence and a company that continues to thrive under the
            leadership of his successors. His vision and dedication laid the
            foundation for the success and growth of Azad Publicities, and his
            influence remains a guiding force in the company's operations.
          </p>
        </div>
      </div>
      <div className="mt-5 pb-5 transiText">
        <h2 className="text-5xl font-semibold mb-5 text-center">Our team</h2>
        <div className="flex flex-col md:flex-row justify-around gap-5 items-center">
          <div className="flex flex-col text-center">
            <img
              src="/img/Founder_image.jpg"
              className="w-6/12 rounded-full mx-auto"
            />
            <h3 className="mt-3 text-3xl">
              Mr. Atul Nanchahal - Managing Director
            </h3>
            <p className="mt-3 text-2xl">
              As the Managing Director, Mr. Atul Nanchahal oversees the
              company's operations and ensures that Azad Publicities continues
              to deliver high-quality services to its clients. With a keen eye
              for detail and a passion for innovation, he drives the company's
              strategic initiatives.
            </p>
          </div>
          <div className="flex flex-col text-center">
            <img
              src="/img/Executive_image.jpeg"
              className="w-6/12 rounded-full mx-auto"
            />
            <h3 className="mt-3 text-3xl">Mr. Tarun Palli - Executive</h3>
            <p className="mt-3 text-2xl">
              Mr. Tarun Palli plays a crucial role in managing client
              relationships and ensuring the smooth execution of projects. His
              dedication and expertise in the advertising field contribute
              significantly to the company's success and client satisfaction.
            </p>
          </div>
        </div>
      </div>
      <div className="p-14 visionIMg">
        <h2 className="text-5xl font-semibold text-center transiText">
          Vision and Mission
        </h2>
        <p className="mt-4 ml-2 text-2xl pb-5 transiText">
          At Azad Publicities, our mission is to provide innovative and
          effective advertising solutions that help our clients achieve their
          business objectives. We are committed to delivering excellence in
          every project, ensuring that our clients' brands are seen and
          remembered.
          <br />
          <br /> Our vision is to be the leading advertising agency in the
          region, known for our creativity, reliability, and results-driven
          approach. We aim to build long-term relationships with our clients by
          consistently exceeding their expectations and delivering exceptional
          value.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
