// Swipwr.js ===================================================================

var init = false;

function swiperCard() {
  if (window.innerWidth < 768) {
    if (!init) {
      init = true;
      swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        spaceBetween: 32,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
    }
  } else if (init) {
    swiper.destroy(true, true);
    init = false;
  }
}
swiperCard();
window.addEventListener("resize", swiperCard);

// ==========================================================================
let logoElements = document.querySelectorAll(".main-page__swiper-slide");

function setHidden(num) {
  for (let i = logoElements.length - 1; i >= logoElements.length - num; i--) {
    logoElements[i].classList.toggle("hidden");
  }
}

if (window.innerWidth >= 768 && window.innerWidth < 1120) {
  setHidden(5);
} else if (window.innerWidth >= 1120) {
  setHidden(3);
}

// ===========================================================================
const hiddenElements = document.querySelectorAll(".hidden");
const buttonShowAll = document.querySelector(".show-all");
const buttonCloseAll = document.querySelector(".close-all");

buttonShowAll.addEventListener("click", (event) => {
  for (let i = 0; i < hiddenElements.length; i++) {
    hiddenElements[i].classList.toggle("hidden");
  }

  buttonShowAll.classList.toggle("hidden");
});

buttonCloseAll.addEventListener("click", (event) => {
  for (let i = 0; i < hiddenElements.length; i++) {
    hiddenElements[i].classList.toggle("hidden");
  }

  buttonShowAll.classList.toggle("hidden");
});

// =========================================================================
