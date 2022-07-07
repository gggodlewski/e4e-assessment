//Style Files (CSS|SASS|SCSS)
import "./styles/main.scss";

//JS Files (JS)
import { slideshowSwiper } from "./js/slideshow.js";
import { newsSwiper } from "./js/news.js";
import { burgerNav } from "./js/burger-nav";
import { eventsSwiper } from "./js/events";
import { photoParallax, testimonialsSwiper } from "./js/testimonials";

//Initialize functions
slideshowSwiper();
testimonialsSwiper();
photoParallax();
eventsSwiper();
newsSwiper();
burgerNav();
