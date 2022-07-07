import Swiper, { Navigation } from "swiper";
import "swiper/css";

export const newsSwiper = () => {
  new Swiper("[data-news-swiper]", {
    modules: [Navigation],
    spaceBetween: 10,
    slidesPerView: 1,
    watchSlidesProgress: true,
    slideVisibleClass: "swiper-slide-visible",
    navigation: {
      nextEl: "[data-news-swiper] .swiper-button-next",
      prevEl: "[data-news-swiper] .swiper-button-prev",
    },
    breakpoints: {
      1200: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      800: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
    },
  });
};
