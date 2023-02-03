
import * as flsFunctions from "./modules/functions.js";
import Swiper,  {Navigation, Pagination } from 'swiper';
flsFunctions.testWebP();



const slider = () => {
    const slider = new Swiper('.slider-wrap', {
        loop: true, 
        speed: 2000,
        autoplay: {
            delay: 5000,
           },
        breakpoints: {
            320: {
                slidesPerView: 1,
                // loopedSlides: 1,
                // spaceBetween: 25
              },
            576: {
                // loop: false,
                slidesPerView: 1.3,
                centeredSlides: true,
                // slidesPerView: "auto",
                // centeredSlides: true,
                spaceBetween: 21
            }
        }
    });
};
const sliderBasket = () => {
    const slider = new Swiper('.slider-basket', {
        modules: [ Navigation ],
        navigation: {
            nextEl: '.slider-basket-next',
            prevEl: '.slider-basket-prev',
        },
        loop: true, 
        speed: 500,
        breakpoints: {
            320: {
                slidesPerView: 2,
                // loopedSlides: 1,
                // spaceBetween: 25
              },
            576: {
                // loop: false,
                slidesPerView: 3,
                centeredSlides: true,
                // slidesPerView: "auto",
                // centeredSlides: true,
                spaceBetween: 16
            }
        },
        
    });
}

slider();
sliderBasket();