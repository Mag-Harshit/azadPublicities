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
    <div className="PortfolioMain pb-5">
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

      <div className="flex flex-wrap flex-row justify-center gap-7 items-center mt-5">
        <div
          className=" bg-zinc-500 rounded-2xl h-5/12 text-black mx-2"
          style={{ width: "400px", height: "450px" }}
        >
          <div className="text-center ">
            <h1 className="text-4xl mb-4">Bus Advertising</h1>
          </div>
          <div>
            <div id="carouselExample" class="carousel slide">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                    src="img/Portfolio/1.jpeg"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="img/Portfolio/2.jpeg"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="img/Portfolio/3.jpeg"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="img/Portfolio/4.jpeg"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="img/Portfolio/5.jpeg"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="img/Portfolio/6.jpeg"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="img/Portfolio/7.jpeg"
                    class="d-block w-100"
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
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>

            <div className="text-center text-2xl mt-3 mb-1">
              High-impact advertising on city buses to reach a broad audience.
            </div>
          </div>
        </div>
        <div
          className=" bg-zinc-500 rounded-2xl text-black mx-2"
          style={{ width: "400px", height: "450px" }}
        >
          <div className="text-center ">
            <h1 className="text-4xl mb-4">Neon Signs</h1>
          </div>
          <div>
            <div style={{ height: "300px" }}>
              <img
                src="/img/Portfolio/Neon_32.jpeg"
                style={{
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "300px",
                }}
              />
            </div>

            <div className="text-center text-2xl mt-3 mb-1">
              Vibrant neon signs to attract attention to your business.
            </div>
          </div>
        </div>
        <div
          className=" bg-zinc-500 rounded-2xl h-5/12 text-black mx-2"
          style={{ width: "400px", height: "450px" }}
        >
          <div className="text-center ">
            <h1 className="text-4xl mb-4">Hoardings</h1>
          </div>
          <div>
            <div
              id="carouselExample1"
              class="carousel slide"
              style={{ height: "300px" }}
            >
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                    src="img/Portfolio/8.jpeg"
                    class="d-block w-100"
                    alt="..."
                    style={{
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      height: "300px",
                    }}
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="img/Portfolio/13.jpeg"
                    class="d-block w-100"
                    alt="..."
                    style={{
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      height: "300px",
                    }}
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="img/Portfolio/10.jpeg"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="img/Portfolio/24.jpeg"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="img/Portfolio/12.jpeg"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="img/Portfolio/14.jpeg"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>

                <div class="carousel-item">
                  <img
                    src="img/Portfolio/22.jpeg"
                    class="d-block w-100"
                    alt="..."
                    style={{
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      height: "300px",
                    }}
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="img/Portfolio/25.jpeg"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="img/Portfolio/26.jpeg"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="img/Portfolio/28.jpeg"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExample1"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExample1"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>

            <div className="text-center text-2xl mt-3 mb-1">
              Large billboards placed in prime locations for maximum exposure.
            </div>
          </div>
        </div>
        <div
          className=" bg-zinc-500 rounded-2xl h-5/12 text-black mx-2"
          style={{ width: "400px", height: "450px" }}
        >
          <div className="text-center ">
            <h1 className="text-4xl mb-4">Unipole</h1>
          </div>
          <div>
            <div
              id="carouselExample2"
              class="carousel slide"
              style={{ height: "300px" }}
            >
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                    src="img/Portfolio/9.jpeg"
                    class="d-block w-100"
                    alt="..."
                    style={{
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      height: "300px",
                    }}
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="img/Portfolio/11.jpeg"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="img/Portfolio/20.jpeg"
                    class="d-block w-100"
                    alt="..."
                    style={{
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      height: "300px",
                    }}
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="img/Portfolio/15.jpeg"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="img/Portfolio/23.jpeg"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExample2"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExample2"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>

            <div className="text-center text-2xl mt-3 mb-1">
              Tall, single-pole ads in high-traffic areas.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
