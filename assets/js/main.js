/*==================== SHOW MENU ====================*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  // Validate that variables exist
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show-menu");
    });
  }
};

showMenu("nav-toggle", "nav-menu");

/*==================== SWIPER JS ====================*/
let galleryThumbs = new Swiper(".gallery-thumbs", {
  spaceBetween: 0,
  slidesPerView: 0,
});

let galleryTop = new Swiper(".gallery-top", {
  effect: "fade",
  loop: true,

  thumbs: {
    swiper: galleryThumbs,
  },
});

/*==================== POPUP ====================*/
const btnOpenVideo = document.querySelector(".islands__video-content-phuquoc");
const islandsPopup = document.getElementById("popup-phuquoc");

function poPup() {
  islandsPopup.classList.add("show-popup");
}
btnOpenVideo.addEventListener("click", poPup);

const btnCloseVideo = document.getElementById("popup-close");

btnCloseVideo.addEventListener("click", () => {
  islandsPopup.classList.remove("show-popup");
});
//////////////////////////////////////////////////////////////

const btnOpenVideoBali = document.querySelector(".islands__video-content-bali");
const islandsPopupBali = document.getElementById("popup-bali");

function poPup1() {
  islandsPopupBali.classList.add("show-popup");
}
btnOpenVideoBali.addEventListener("click", poPup1);
// btnOpenVideo.forEach((b) => b.addEventListener("click", poPup));

const btnCloseVideo1 = document.getElementById("popup-close-bali");

btnCloseVideo1.addEventListener("click", () => {
  islandsPopupBali.classList.remove("show-popup");
});
// :::::::::::::::::::::::::::::::::::::::::::::::::::::
const btnOpenVideoBora = document.querySelector(".islands__video-content-bora");
const islandsPopupBora = document.getElementById("popup-bora");

function poPup2() {
  islandsPopupBora.classList.add("show-popup");
}
btnOpenVideoBora.addEventListener("click", poPup2);

const btnCloseVideo2 = document.getElementById("popup-close-bora");

btnCloseVideo2.addEventListener("click", () => {
  islandsPopupBora.classList.remove("show-popup");
});

/*==================== GSAP ANIMATION ====================*/
const controlImg = document.querySelectorAll(".controls__img");

function scrollAnimation() {
  gsap.from(".islands__subtitle", {
    opacity: 0,
    duration: 0.2,
    delay: 0.2,
    y: -20,
  });
  gsap.from(".islands__title", {
    opacity: 0,
    duration: 0.4,
    delay: 0.4,
    y: -20,
  });
  gsap.from(".islands__description", {
    opacity: 0,
    duration: 0.6,
    delay: 0.6,
    y: -20,
  });
  gsap.from(".islands__button", {
    opacity: 0,
    duration: 0.8,
    delay: 0.8,
    y: -20,
  });
  gsap.from(".islands__video-content-phuquoc", {
    opacity: 0,
    duration: 1,
    delay: 1,
    y: -20,
  });
  gsap.from(".islands__video-content-bali", {
    opacity: 0,
    duration: 1,
    delay: 1,
    y: -20,
  });
  gsap.from(".islands__video-content-bora", {
    opacity: 0,
    duration: 1,
    delay: 1,
    y: -20,
  });

  islandsPopup.classList.remove("show-popup");
}

controlImg.forEach((c) => c.addEventListener("click", scrollAnimation));
