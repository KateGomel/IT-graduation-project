import Swiper from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "./carousel.scss";
import "swiper/css/navigation";
import "swiper/css/pagination";

new Swiper(".carousel__slider", {
  modules: [Navigation, Pagination, Autoplay],
  direction: "horizontal",
  loop: true,
  // slidesPerView: 3,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
