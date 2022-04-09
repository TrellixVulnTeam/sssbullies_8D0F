// **** USE STRICT MODE **** //
"use strict";

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
    navMenu.style.boxShadow = "1px 1px 5px rgba(5,5,5,.3";
  } else {
    navMenu.style.backgroundColor = "transparent";
    navMenu.style.boxShadow = "none";
  }
});
