const PROGRESS = document.getElementById("progress");
const PREV = document.getElementById("prev");
const NEXT = document.getElementById("next");
const CIRCLES = document.querySelectorAll(".circle");

let current = 1;

NEXT.addEventListener("click", () => {
  current += 1 ? current < CIRCLES.length : CIRCLES.length;
  update();
});

PREV.addEventListener("click", () => {
  current -= 1 ? current > 1 : current;
  update();
});

function update() {
  CIRCLES.forEach((circle, idx) => {
    if (idx < current) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  if (current == 1) {
    PREV.classList.add("inactive");
  } else {
    PREV.classList.remove("inactive");
  }

  if (current == CIRCLES.length) {
    NEXT.classList.add("inactive");
  } else {
    NEXT.classList.remove("inactive");
  }
  const actives = document.querySelectorAll(".active");

  console.log(actives.length, CIRCLES.length);

  PROGRESS.style.width =
    ((actives.length - 1) / (CIRCLES.length - 1)) * 100 + "%";
}
