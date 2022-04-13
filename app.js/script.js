// **** USE STRICT MODE **** //
"use strict";

// ********** Open/Close Nav Menu Functions ********** //

const logoImg = document.querySelector(".logo-main");
const navMenu = document.getElementById("nav-main");
const cheese = document.getElementById("cheese");
const topBun = document.getElementById("top");
const meat = document.getElementById("meat");
const bottomBun = document.getElementById("bottom");
const navLinks = document.querySelectorAll(".nav-li");

const changeBurgerStyle = function () {
  topBun.style.width = "100%";
  bottomBun.style.width = "100%";
  topBun.style.backgroundColor = "#fff";
  bottomBun.style.backgroundColor = "#fff";
};

cheese.addEventListener("click", () => {
  navMenu.classList.toggle("showNav");
  topBun.classList.toggle("topChange");
  meat.classList.toggle("meatGone");
  bottomBun.classList.toggle("bottomChange");

  if (navMenu.classList.contains("showNav")) {
    topBun.style.width = "80%";
    bottomBun.style.width = "80%";
    topBun.style.backgroundColor = "rgb(204,4,4)";
    bottomBun.style.backgroundColor = "rgb(204,4,4)";
  } else {
    changeBurgerStyle();
  }
});

// ********** Close Nav Links After Click ********** //

navLinks.forEach((l) => {
  l.addEventListener("click", () => {
    navMenu.classList.remove("showNav");
    topBun.classList.remove("topChange");
    meat.classList.remove("meatGone");
    bottomBun.classList.remove("bottomChange");
    changeBurgerStyle();
  });
});

// ********** Nav BG changes after scroll ********** //

const mediaQueryLandscape = window.matchMedia("(min-width: 1200px)");

window.addEventListener("scroll", () => {
  if (
    window.scrollY > 1 &&
    !navMenu.classList.contains("navShow") &&
    mediaQueryLandscape.matches === true
  ) {
    navMenu.style.backgroundColor = "#050505";
    navMenu.style.boxShadow = "2px 2px 15px rgba(50,50,50,.5";
  } else {
    navMenu.style.backgroundColor = "transparent";
    navMenu.style.boxShadow = "none";
  }
});

// ********** Observer for Move-Up Class Elements ********** //

const contentsMoveUp = document.querySelectorAll(".move-up");

// Observer Callback Function

const contentsObserverFunction = function (entries) {
  const [entry] = entries;

  entry.target.classList.toggle("galleryAnimateUp", entry.isIntersecting);

  // Stop Observer after Intersecting

  if (entry.isIntersecting) moveUpObserver.unobserve(entry.target);
};

// Observer Options

const contentsObserverOptions = {
  root: null,
  threshold: 0,
  rootMargin: "-50px",
};

// Actual Observer

const moveUpObserver = new IntersectionObserver(
  contentsObserverFunction,
  contentsObserverOptions
);

// Observer Watch

contentsMoveUp.forEach((cm) => {
  moveUpObserver.observe(cm);
});

// ********** Modal Function for Featured Breeding Section ********** //

const modalContainer = document.querySelector(".modal-container");
const posterBoxImgs = document.querySelectorAll(".poster-boxes-img");
const closeModal = document.querySelector(".far");
const modalImg = document.querySelector(".modal-img");

// Open Modal

posterBoxImgs.forEach((i) => {
  i.addEventListener("click", (e) => {
    // console.log(e.currentTarget.src);
    const currentImages = e.currentTarget.src;
    modalImg.src = currentImages;
    modalContainer.classList.add("modalOpen");
    closeModal.style.display = "block";
  });
});

// Close Modal

closeModal.addEventListener("click", () => {
  modalContainer.classList.remove("modalOpen");
  closeModal.style.display = "none";
});

// ********** Observer for Multiple Sections ********** //

const posterContainer = document.querySelector(".poster-container");
const posterBoxes = document.querySelectorAll(".poster-boxes");
const containerControl = document.querySelectorAll(".container-control");
const bulliesCardFirst = document.querySelectorAll(".bullies-card-first");
const bulliesCardSecond = document.querySelectorAll(".bullies-card-second");

// Observer Callback Function

const containerControlFunction = function (entries) {
  const [entry] = entries;
  // console.log(entry.target.classList);

  // Observer for Featured Breeding Section

  if (
    entry.isIntersecting &&
    entry.target.classList.contains("poster-container")
  ) {
    posterBoxes.forEach((pb) => {
      pb.classList.toggle("galleryAnimateUp");
    });
  }

  // Observer for Featured Featured Bullies Section

  if (
    entry.isIntersecting &&
    entry.target.classList.contains("bullies-container-one")
  ) {
    bulliesCardFirst.forEach((b1) => {
      b1.classList.toggle("galleryAnimateUp");
    });
  }

  if (
    entry.isIntersecting &&
    entry.target.classList.contains("bullies-container-two")
  ) {
    bulliesCardSecond.forEach((b1) => {
      b1.classList.toggle("galleryAnimateUp");
    });
  }

  // Observer for Sections with BG Opacity Animations

  if (
    entry.isIntersecting &&
    entry.target.classList.contains("bg-opacity-sections")
  ) {
    entry.target.style.backgroundColor = "rgba(05,05,05,0.6)";
  }

  // UnObserve Entries after Intersection

  if (entry.isIntersecting) containerControlObserver.unobserve(entry.target);
};

// Observer Options

const containerControlOptions = {
  root: null,
  threshold: 0,
  rootMargin: "-120px",
};

// Observer

const containerControlObserver = new IntersectionObserver(
  containerControlFunction,
  containerControlOptions
);

// Observer Watch

containerControl.forEach((cc) => {
  containerControlObserver.observe(cc);
});
