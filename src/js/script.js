import "/src/sass/style.scss";
import Swiper from "swiper";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const swiper = new Swiper(".promo__swiper", {
    modules: [Pagination],
    slidesPerView: 1,
    spaceBetween: 0,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

const swiperResults = new Swiper(".results__swiper", {
    modules: [Navigation, Pagination, Keyboard],
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination#results__navigation_pagination",
        clickable: false,
    },
    spaceBetween: 39,
    breakpoints: {
        320: {
            slidesPerView: 1,
            allowTouchMove: false,
            keyboard: false,
        },
        1024: {
            slidesPerView: 2,
            keyboard: true,
            allowTouchMove: true,
        },
        1500: {
            slidesPerView: 3,
        },
        1900: {
            slidesPerView: 4,
        },
    },
});

const swiperBattles = new Swiper(".battles__swiper", {
    modules: [Navigation, Pagination, Keyboard],
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination#battles__navigation_pagination",
        clickable: false,
    },
    spaceBetween: 39,
    breakpoints: {
        320: {
            slidesPerView: 1,
            allowTouchMove: false,
            keyboard: false,
        },
        1024: {
            slidesPerView: 2,
            keyboard: true,
            allowTouchMove: true,
        },
        1500: {
            slidesPerView: 3,
        },
        1900: {
            slidesPerView: 4,
        },
    },
});

let cardInfoTime = 5 * 60 + 39;

function updateStartIn() {
    const h = Math.floor(cardInfoTime / 60);
    const m = cardInfoTime % 60;

    // Берём ВСЕ элементы с классом .time__starts-in
    const elements = document.querySelectorAll(".time__starts-in");

    elements.forEach((el) => {
        el.textContent = `${h} hours ${m} min`;
        el.datetime = `${h}:${String(m).padStart(2, "0")}`;
    });

    if (cardInfoTime <= 0) {
        clearInterval(cardInfoTimeInterval);
        return;
    }

    cardInfoTime--; // минус 1 минута
}

const cardInfoTimeInterval = setInterval(updateStartIn, 60000); // раз в минуту
updateStartIn();

let teamTime = 15 * 60 + 30;

function updateTimer() {
    const minutes = Math.floor(teamTime / 60);
    const seconds = teamTime % 60;

    document.getElementById(
        "check__list"
    ).textContent = `${minutes} мин ${String(seconds).padStart(2, "0")} сек`;

    if (teamTime <= 0) {
        clearInterval(teamTimeInterval);
        return;
    }

    teamTime--;
}

const teamTimeInterval = setInterval(updateTimer, 1000); // раз в минуту
updateTimer();
