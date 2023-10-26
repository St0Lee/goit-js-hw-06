function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyEl = document.querySelector("body");
const btnEl = document.querySelector(".change-color");
const pEl = document.querySelector(".color");

btnEl.addEventListener("click", changeColor)
pEl.addEventListener("click", changeColor)

function changeColor () {
  const currentColor = getRandomHexColor();
  bodyEl.style.backgroundColor = currentColor;
  pEl.textContent = currentColor;
}
