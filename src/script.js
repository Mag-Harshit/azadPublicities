document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".card");

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  cards.forEach((card) => {
    observer.observe(card);
  });
});
