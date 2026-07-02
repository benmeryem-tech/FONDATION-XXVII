document.addEventListener("DOMContentLoaded", () => {
  const languages = [
    { label: "Anglais", code: "en" },
    { label: "Chinois", code: "zh-CN" },
    { label: "Portugais", code: "pt" },
    { label: "Arabe", code: "ar" },
    { label: "Espagnol", code: "es" },
    { label: "Japonais", code: "ja" },
  ];

  if (!document.querySelector(".xxvii-language-band")) {
    const ticker = document.querySelector(".xxvii-ticker");
    const topbar = document.querySelector(".topbar");
    const anchor = ticker || topbar;

    if (anchor) {
      const band = document.createElement("nav");
      band.className = "xxvii-language-band";
      band.setAttribute("aria-label", "Traduction du site");

      const label = document.createElement("span");
      label.className = "xxvii-language-label";
      label.textContent = "Traduction";
      band.appendChild(label);

      languages.forEach((language) => {
        const link = document.createElement("a");
        const params = new URLSearchParams({
          sl: "fr",
          tl: language.code,
          u: window.location.href,
        });

        link.href = "https://translate.google.com/translate?" + params.toString();
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.hreflang = language.code;
        link.textContent = language.label;
        link.setAttribute("aria-label", "Traduire le site en " + language.label);
        band.appendChild(link);
      });

      anchor.insertAdjacentElement(ticker ? "afterend" : "beforebegin", band);
    }
  }

  document.querySelectorAll("[data-slider]").forEach((slider) => {
    const slides = Array.from(slider.querySelectorAll(".slide"));
    const prev = slider.querySelector(".slider-btn.prev");
    const next = slider.querySelector(".slider-btn.next");
    const dots = slider.querySelector(".dots");

    if (!slides.length) return;

    let index = slides.findIndex((slide) => slide.classList.contains("active"));
    if (index < 0) index = 0;

    let timer = null;
    const delay = 4200;

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
            restart();
          });
          dots.appendChild(dot);
        });
      }
    }

    function goNext() {
      index = (index + 1) % slides.length;
      render();
    }

    function restart() {
      if (timer) clearInterval(timer);
      timer = setInterval(goNext, delay);
    }

    if (prev) {
      prev.addEventListener("click", () => {
        index = (index - 1 + slides.length) % slides.length;
        render();
        restart();
      });
    }

    if (next) {
      next.addEventListener("click", () => {
        goNext();
        restart();
      });
    }

    slider.addEventListener("mouseenter", () => {
      if (timer) clearInterval(timer);
    });

    slider.addEventListener("mouseleave", restart);

    slider.addEventListener("touchstart", () => {
      if (timer) clearInterval(timer);
    }, { passive: true });

    slider.addEventListener("touchend", restart, { passive: true });

    render();
    restart();
  });
});
