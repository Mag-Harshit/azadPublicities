import React from "react";

const Projects = () => {
  return (
    <section className="mt-12 p-2 rounded ProjectBG">
      <div className="flex flex-col gap-4 sm:gap-0 sm:flex-row justify-between items-center">
        <div className="flex flex-col sm:flex-row items-center sm:w-6/12 gap-4">
          <h2 className="text-4xl ClientHome font-bold ml-10 md:text-3xl lg:text-5xl">
            OUR CLIENTS
          </h2>
          <p className=" text-xl md:text-xl lg:text-2xl font-medium">
            At Azad Publicities, we take pride in our work and the clients we
            serve. Over the years, we've partnered with a diverse range of
            businesses, providing tailored advertising solutions that drive
            results. Here are some of the esteemed clients and partners that we
            worked with in advertising
          </p>
        </div>
        <div
          id="carouselExample"
          class="carousel slide w-full sm:w-6/12 md:mr-10"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="img/Proof1.webp"
                class="d-block w-100 h-full"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="img/Proof2.jpg"
                class="d-block w-100 h-full"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="img/Proof3.avif"
                class="d-block w-100 h-full"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="img/Proof4.jpg"
                class="d-block w-100 h-full"
                alt="..."
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
