import Swiper, { Pagination, EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export const testimonialsSwiper = () => {
  new Swiper("[data-testimonials-swiper]", {
    modules: [Pagination, EffectFade],
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    pagination: {
      el: "[data-testimonials-pagination]",
      clickable: true,
    },
  });
};

export const photoParallax = () => {
  const observables = document.querySelectorAll("[data-parallax-block]");
  const parallaxRatio = 4;

  const applyParallax = (element) => {
    const initialPosition = window.pageYOffset;

    window.addEventListener("scroll", () => {
      const parallaxTranslate = +((window.pageYOffset - initialPosition) / parallaxRatio).toFixed(2);
      element.style.setProperty("--parallax-offset", parallaxTranslate);
    });
  };

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        applyParallax(entry.target);
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: "0%" }
  );

  observables.forEach((observable) => {
    observer.observe(observable);
  });
};
