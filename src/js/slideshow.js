import Swiper, { Autoplay, EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

export const slideshowSwiper = () => {
  new Swiper("[data-slideshow-swiper]", {
    modules: [Autoplay, EffectFade],

    loop: true,
    spaceBetween: 0,
    slidesPerView: 1,
    noSwiping: true,
    noSwipingClass: "swiper-no-swiping",

    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },

    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },
  });
};
