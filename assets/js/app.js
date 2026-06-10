document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-slider]").forEach((slider) => {
    const slides = Array.from(slider.querySelectorAll(".slide"));
    const prev = slider.querySelector(".slider-btn.prev");
    const next = slider.querySelector(".slider-btn.next");
    const dots = slider.querySelector(".dots");

    if (!slides.length) return;

    let index = slides.findIndex((slide) => slide.classList.contains("active"));
    if (index < 0) index = 0;

    function render() {
      slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index);
      });

      if (dots) {
        dots.innerHTML = "";
        slides.forEach((_, i) => {
          const dot = document.createElement("button");
          dot.type = "button";
          dot.setAttribute("aria-label", "Aller à l’image " + (i + 1));
          dot.classList.toggle("active", i === index);
          dot.addEventListener("click", () => {
            index = i;
            render();
          });
          dots.appendChild(dot);
        });
      }
    }

    if (prev) {
      prev.addEventListener("click", () => {
        index = (index - 1 + slides.length) % slides.length;
        render();
      });
    }

    if (next) {
      next.addEventListener("click", () => {
        index = (index + 1) % slides.length;
        render();
      });
    }

    render();
  });
});
