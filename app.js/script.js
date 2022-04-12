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
    topBun.style.width = "100%";
    bottomBun.style.width = "100%";
    topBun.style.backgroundColor = "#fff";
    bottomBun.style.backgroundColor = "#fff";
  }
});

// Close Nav Links After Click

navLinks.forEach((l) => {
  l.addEventListener("click", () => {
    navMenu.classList.remove("showNav");
    topBun.classList.remove("topChange");
    meat.classList.remove("meatGone");
    bottomBun.classList.remove("bottomChange");
    topBun.style.width = "100%";
    bottomBun.style.width = "100%";
    topBun.style.backgroundColor = "#fff";
    bottomBun.style.backgroundColor = "#fff";
  });
});

// Nav BG changes after scroll

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

// ********** IntersectionObserver for Section Titles ********** //

const sectionTitles = document.querySelectorAll(".section-titles");

// Observer Callback Function

const titleObserverFunction = function (entries) {
  const [entry] = entries;
  console.log(entry);

  // entry.target.classList.toggle("galleryAnimateUp", entry.isIntersecting);

  entry.target.classList.toggle("galleryAnimateUp", entry.isIntersecting);

  // Stop Observer after Intersecting

  if (entry.isIntersecting) sectionTitlesObserver.unobserve(entry.target);
};

// Observer Options

const titleObserverOptions = {
  root: null,
  threshold: 0,
  rootMargin: "-50px",
};

// Actual Observer

const sectionTitlesObserver = new IntersectionObserver(
  titleObserverFunction,
  titleObserverOptions
);

sectionTitles.forEach((s) => {
  sectionTitlesObserver.observe(s);
});

// ********** IntersectionObserver for About Content ********** //

const aboutContent = document.querySelectorAll(".about-content");

// Observer Callback Function

const aboutContentFunction = function (entries) {
  const [entry] = entries;
  console.log(entry);

  entry.target.classList.toggle("galleryAnimateUp", entry.isIntersecting);

  // Stop Observer after Intersecting

  if (entry.isIntersecting) aboutContentObserver.unobserve(entry.target);
};

// Observer Options

const aboutContentObserverOptions = {
  root: null,
  threshold: 0,
  rootMargin: "-100px",
};

// Actual Observer

const aboutContentObserver = new IntersectionObserver(
  aboutContentFunction,
  aboutContentObserverOptions
);

aboutContent.forEach((ab) => {
  aboutContentObserver.observe(ab);
});

// ********** IntersectionObserver for BG Opacity sections ********** //

const bgOpacitySections = document.querySelectorAll(".bg-opacity-sections");

// Observer Callback Function

const bgOpacityObserverFunction = function (entries) {
  const [entry] = entries;
  console.log(entry);
  if (entry.isIntersecting) {
    entry.target.style.backgroundColor = "rgba(05,05,05,0.6";
  }

  // entry.target.classList.toggle("galleryAnimateUp", entry.isIntersecting);

  // Stop Observer after Intersecting

  if (entry.isIntersecting) bgOpacityObserver.unobserve(entry.target);
};

// Observer Options

const bgOpacityObserverOptions = {
  root: null,
  threshold: 0,
  rootMargin: "-100px",
};

// Actual Observer

const bgOpacityObserver = new IntersectionObserver(
  bgOpacityObserverFunction,
  bgOpacityObserverOptions
);

bgOpacitySections.forEach((bg) => {
  bgOpacityObserver.observe(bg);
});

// ********** IntersectionObserver for Breedings Section ********** //

const posterContainer = document.querySelector(".poster-container");
const posterBoxes = document.querySelectorAll(".poster-boxes");

// Observer Callback Function

const breedingObserverFunction = function (entries) {
  const [entry] = entries;
  console.log(entry);

  if (entry.isIntersecting) {
    posterBoxes.forEach((pb) => {
      pb.classList.toggle("galleryAnimateUp");
    });
  }

  // entry.target.classList.toggle("galleryAnimateUp", entry.isIntersecting);

  // Stop Observer after Intersecting

  if (entry.isIntersecting) breedingObserver.unobserve(entry.target);
};

// Observer Options

const breedingObserverOptions = {
  root: null,
  threshold: 0,
  rootMargin: "-100px",
};

// Actual Observer

const breedingObserver = new IntersectionObserver(
  breedingObserverFunction,
  breedingObserverOptions
);

breedingObserver.observe(posterContainer);

// ********** Breedings Modal ********** //

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

// ********** IntersectionObserver for Bullies Section ********** //

const bulliesContainerOne = document.querySelector(".bullies-container-one");
const bulliesContainerTwo = document.querySelector(".bullies-container-two");
const bulliesCardFirst = document.querySelectorAll(".bullies-card-first");
const bulliesCardSecond = document.querySelectorAll(".bullies-card-second");

// Observer Callback Function One

const bulliesFirstObserverFunction = function (entries) {
  const [entry] = entries;
  console.log(entry);

  if (entry.isIntersecting) {
    bulliesCardFirst.forEach((b1) => {
      b1.classList.toggle("galleryAnimateUp");
    });
  }

  // Stop Observer after Intersecting

  if (entry.isIntersecting) bulliesOneObserver.unobserve(entry.target);
};

// Observer Callback Function Two

const bulliesSecondObserverFunction = function (entries) {
  const [entry] = entries;
  console.log(entry);

  if (entry.isIntersecting) {
    bulliesCardSecond.forEach((b2) => {
      b2.classList.toggle("galleryAnimateUp");
    });
  }

  // Stop Observer after Intersecting

  if (entry.isIntersecting) bulliesTwoObserver.unobserve(entry.target);
};

// Observer Options

const bulliesObserverOptions = {
  root: null,
  threshold: 0,
  rootMargin: "-150px",
};

// Actual Observers

const bulliesOneObserver = new IntersectionObserver(
  bulliesFirstObserverFunction,
  bulliesObserverOptions
);

const bulliesTwoObserver = new IntersectionObserver(
  bulliesSecondObserverFunction,
  bulliesObserverOptions
);

// Call/Watch Observers

bulliesOneObserver.observe(bulliesContainerOne);
bulliesTwoObserver.observe(bulliesContainerTwo);
