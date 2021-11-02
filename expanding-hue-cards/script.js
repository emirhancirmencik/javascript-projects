const CONTAINER = document.querySelector(".container");
var color = randomColor();

var panels = [];

function createPanels(color) {
  CONTAINER.innerHTML = "";
  for (let i = 0; i < 8; i++) {
    color = parseInt(color, 16) + 9192;
    const PANEL = document.createElement("div");
    const TEXT = document.createElement("H3");
    color = color.toString(16);
    var hue = "#" + color;
    const TEXT_ = document.createTextNode(hue);

    PANEL.classList.add("panel");

    if (i === 0) {
      PANEL.classList.add("active");
    }

    TEXT.appendChild(TEXT_);
    PANEL.appendChild(TEXT);
    CONTAINER.appendChild(PANEL);
    PANEL.style.background = hue;
    panels.push(PANEL);

    panels.forEach((panel) => {
      panel.addEventListener("click", () => {
        removeActiveClasses();
        panel.classList.add("active");
      });
    });

    function removeActiveClasses() {
      panels.forEach((panel) => {
        panel.classList.remove("active");
      });
    }
  }
}
function randomColor() {
  var randomColor = Math.floor(Math.random() * 16777215).toString(16);
  while (randomColor.length != 6) {
    randomColor = randomColor();
  }
  return randomColor;
}

function newHue() {
  createPanels(randomColor());
}
createPanels(color);
