import React, { useEffect } from "react";

const Portfolio = () => {
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
    <div className="PortfolioMain">
      <div>
        <h1 className="text-7xl font-extrabold text-center p-5 transiText">
          Portfolio
        </h1>
        <h2 className="text-5xl font-semibold text-center mt-5 transiText">
          Showcasing Our Creative and Impactful Advertising Solutions
        </h2>
        <p className="mt-4 ml-2 text-2xl px-1 pb-8 transiText">
          "Welcome to our portfolio. Here, we present a selection of our work
          that highlights the diverse and impactful advertising solutions we've
          crafted for our clients. Our commitment to excellence ensures that
          each project we undertake achieves remarkable results and leaves a
          lasting impression."
        </p>
      </div>
    </div>
  );
};

export default Portfolio;
