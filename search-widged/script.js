const BUTTON = document.querySelector("#searchButton");
const INPUT = document.querySelector("#input");

BUTTON.addEventListener("click", () => {
  BUTTON.classList.add("active");
  INPUT.classList.add("active");
  INPUT.focus();
});
