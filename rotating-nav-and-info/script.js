const NAVBTN = document.getElementById("btn-nav");
const INFOBTN = document.getElementById("btn-info");
const NAVCLS = document.getElementById("nav-close");
const INFOCLS = document.getElementById("info-close");
const CONTAINER = document.getElementById("container");

NAVBTN.addEventListener("click", () => {
  CONTAINER.style.transformOrigin = "top left";
  CONTAINER.classList.add("nav-active");
});
NAVCLS.addEventListener("click", () => {
  CONTAINER.classList.remove("nav-active");
});
INFOBTN.addEventListener("click", () => {
  CONTAINER.style.transformOrigin = "top right";
  CONTAINER.classList.add("info-active");
});
INFOCLS.addEventListener("click", () => {
  CONTAINER.classList.remove("info-active");
});
